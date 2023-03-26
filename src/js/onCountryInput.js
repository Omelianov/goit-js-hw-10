import { fetchCountries } from "../fetchCountries"
import { refs } from "./refs"
import { renderCountryList } from './renderCountryList'
import { renderCountryInfo } from './renderCountryInfo'

export function onCountryInput() {
    const name = refs.countryInput.value.trim()
    if (name === '') {
        return (refs.countryList.innerHTML = ''), (refs.countryInfo.innerHTML = '')
    }
    fetchCountries(name)
        .then(countries => {
            refs.countryList.innerHTML = ''
            refs.countryInfo.innerHTML = ''
            if (countries.length === 1) {
                refs.countryList.insertAdjacentHTML('beforeend', renderCountryList(countries))
                refs.countryInfo.insertAdjacentHTML('beforeend', renderCountryInfo(countries))
            } else if (countries.length >= 10) {
                alertTooManyMatches()
            } else {
                refs.countryList.insertAdjacentHTML('beforeend', renderCountryList(countries))
            }
        })
        .catch(alertWrongName)
}