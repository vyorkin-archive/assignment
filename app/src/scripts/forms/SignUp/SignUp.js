import AltContainer from 'alt/AltContainer';
import connectToStores from 'alt/utils/connectToStores';
import React, { Component, PropTypes } from 'react';

import Select from 'react-select';
import 'react-select/dist/default.css';

import SignUpActions from '../../actions/SignUpActions';
import GeoStore from '../../stores/GeoStore';

import Form from '../Form';

import './SignUp.css';

@connectToStores
export default class SignUpForm extends Component {
  static getStores() {
    return [GeoStore];
  }

  static getPropsFromStores() {
    return {
      countries: GeoStore.getState().countries,
      cities: GeoStore.getState().cities
    };
  }

  static defaultProps = {
    osOptions: [
      { label: 'iOS', value: 'ios' },
      { label: 'Android', value: 'android' }
    ]
  };

  state = {
    country: null
  }

  componentWillMount() {
    GeoStore.fetchCountries();
  }

  render() {
    return (
        <Form onSubmit={::this.handleSubmit}>
          <div className='form__body'>
            <input type='text' placeholder='Фамилия' className='input' required />
            <input type='text' placeholder='Имя' className='input' required />
            <input type='text' placeholder='Отчество' className='input' required />
            <input type='email' placeholder='Email' className='input' required />
            <Select ref='countrySelect' name='country' clearable={false} placeholder='Страна'
              noResultsText='ничего не найдено' searchPromptText='поиск'
              options={this.props.countries.map(this.toSelectOptions)}
              value={this.state.country} onChange={::this.handleCountryChange} />
            <Select ref='citySelect' name='city' clearable={false} placeholder='Город'
              noResultsText='ничего не найдено' searchPromptText='поиск'
              disabled={!this.state.country} options={this.props.cities.map(this.toSelectOptions)} />
            <Select ref='osSelect' name='os' clearable={false} placeholder='ОС'
              noResultsText='ничего не найдено' searchPromptText='поиск'
              options={this.props.osOptions} />
          </div>
          <div className='form__footer'>
            <div className='form__controls'>
              <button type='submit' className='button button--success button--signup'>
                Зарегистрироваться
              </button>
            </div>
          </div>
        </Form>
    );
  }


  handleSubmit(form) {
    SignUpActions.signUp(form);
  }

  handleCountryChange(_, [country]) {
    if (country) {
      this.setState({ country: country.label });
      GeoStore.fetchCities(country.value);
    } else {
      this.setState({ country: null });
    }
  }

  toSelectOptions(model) {
    return {
      value: model.id,
      label: model.name
    };
  }
}
