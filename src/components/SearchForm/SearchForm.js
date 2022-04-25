import React from 'react';
import SolidButton from '../ui/buttons/solid/SolidButton';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { actionButtonText } from '../../shared/constants/buttons/button-text'; 
import { checkBoxCaptions } from '../../shared/constants/captions/captions';
import './index.css';

export default function SearchForm() {
  return (
    <section className="search-form">
      <div className="search-form__form">
        <form className="search-form__form-entity" name="search-form">
          <input
            type="text"
            className="search-form__search-input"
            name="search-input"
            id="search-input"
            placeholder="Фильм"
            size="10"
          />
          <SolidButton
            view="blue-search"
            label={actionButtonText.search}
          />
        </form>
      </div>
      <div className="search-form__shorts">
        <FilterCheckbox label={checkBoxCaptions.shortMeters} />
      </div>
    </section>
  );
};