import './css/styles.css';
import debounce from 'lodash.debounce'
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries';
import { refs } from './js/refs'
import { onCountryInput } from './js/onCountryInput'

const DEBOUNCE_DELAY = 300;

refs.countryInput.addEventListener('input', debounce(onCountryInput, DEBOUNCE_DELAY))

onCountryInput;

