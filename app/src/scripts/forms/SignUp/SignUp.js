import AltContainer from 'alt/AltContainer';
import connectToStores from 'alt/utils/connectToStores';
import React, { Component, PropTypes } from 'react';

import Select from 'react-select';
import 'react-select/dist/default.css';

import GeoStore from '../../stores/GeoStore';

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
    country: null,
    errors: new Map()
  }

  componentWillMount() {
    GeoStore.fetchCountries();
  }

  render() {
    return (
        <form onSubmit={::this.submit} className='form'>
          <div className='form__body'>
            <input type='text' placeholder='Фамилия' className='input' />
            <input type='text' placeholder='Имя' className='input' />
            <input type='text' placeholder='Отчество' className='input' />
            <input type='email' placeholder='Email' className='input' />
            <Select ref='countrySelect' name='country' clearable={false} placeholder='Страна'
              noResultsText='ничего не найдено' searchPromptText='поиск'
              options={this.props.countries.map(this.toSelectOptions)}
              value={this.state.country} onChange={::this.onCountryChange} />
            <Select ref='citySelect' name='city' clearable={false} placeholder='Город'
              noResultsText='ничего не найдено' searchPromptText='поиск'
              disabled={!this.state.country} options={this.props.cities.map(this.toSelectOptions)} />
            <Select ref='osSelect' name='os' clearable={false} placeholder='ОС'
              noResultsText='ничего не найдено' searchPromptText='поиск'
              options={this.props.osOptions} />
          </div>
          <div className='form__footer'>
            <div className='form__controls'>
              <button type='submit' className='button button--submit button--signup'>
                Зарегистрироваться
              </button>
            </div>
          </div>
        </form>
    );
  }

  validate() {
    return this.state.errors.size === 0;
  }

  submit(e) {
    if (validate()) {
      console.log('form is valid');
    }
    e.preventDefault();
  }

  onCountryChange(_, [country]) {
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
