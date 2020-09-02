/* eslint-disable no-throw-literal */
import request from 'superagent';

const URL = 'https://mighty-sea-80335.herokuapp.com'


export function signUp(userData) {
  try {
    return request.post(`${URL}/auth/signup`, userData)
  } catch(e) {
    throw { error: e.message }
  }
}

export function signIn(userData) {
  try {
    return request.post(`${URL}/auth/signin`, userData)
  } catch(e) {
    throw { error: e.message }
  }
}

export function getPic() {
  const token = localStorage.getItem('TOKEN')

  try {
    return request
              .get(`${URL}/api/getPic`)
              .set('Authorization', token)
  } catch(e) {
    throw { error: e.message }
  }
}

export function addPic(pic) {
  const token = localStorage.getItem('TOKEN')

  try {
    return request
              .post(`${URL}/api/getPic`, pic)
              .set('Authorization', token)
  } catch(e) {
    throw { error: e.message }
  }
}

export function fetchFavorites() {
  const token = localStorage.getItem('TOKEN')

  try {
    return request
              .get(`${URL}/api/favorites`)
              .set('Authorization', token)
  } catch(e) {
    throw { error: e.message }
  }
}
 