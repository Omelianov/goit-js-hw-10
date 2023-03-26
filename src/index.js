import './css/styles.css';
import debounce from 'lodash.debounce'
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries';
import { refs } from './js/refs'
import { renderCountryList } from './js/renderCountryList'
import { renderCountryInfo } from './js/renderCountryInfo'
import { alertWrongName } from './js/alerts'
import { alertTooManyMatches } from './js/alerts'
import { onCountryInput } from './js/onCountryInput'

const DEBOUNCE_DELAY = 300;

refs.countryInput.addEventListener('input', debounce(onCountryInput, DEBOUNCE_DELAY))

onCountryInput;

renderCountryList;

renderCountryInfo;

alertWrongName;

alertTooManyMatches;