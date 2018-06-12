import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
export function getUrlParams(name) {
     var result = window.location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
     if (result == null || result.length < 1) {
       return "";
     }
     return result[1];
}