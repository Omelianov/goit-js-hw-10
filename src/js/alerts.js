import Notiflix from 'notiflix';

export function alertWrongName() {
    Notiflix.Notify.failure('Oops, there is no country with that name')
}


export function alertTooManyMatches() {
    Notiflix.Notify.info('Too many matches found. Please enter a more specific name.')
}
