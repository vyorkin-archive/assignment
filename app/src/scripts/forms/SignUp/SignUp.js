import AltContainer from 'alt/AltContainer';
import connectToStores from 'alt/utils/connectToStores';
import React, { Component, PropTypes } from 'react';

import Select from 'react-select';
import 'react-select/dist/default.css';

import CountryStore from '../../stores/CountryStore';
import CountryActions from '../../actions/CountryActions';

import CityStore from '../../stores/CityStore';
import CityActions from '../../actions/CityActions';

import './SignUp.css';

@connectToStores
export default class SignUpForm extends Component {
  static getStores() {
    return [CountryStore, CityStore];
  }

  static getPropsFromStores() {
    return {
      countries: CountryStore.getState().items,
      cities: CityStore.getState().items
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
    CountryStore.fetch();
  }

  render() {
    return (
      <div className='form'>
        <form onSubmit={::this.submit} className='form__body'>
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
        </form>
        <div className='form__footer'>
          <div className='form__controls'>
            <button type='submit' className='button button--submit button--signup'>
              Зарегистрироваться
            </button>
          </div>
        </div>
      </div>
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
      CityStore.fetch(country.value);
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
