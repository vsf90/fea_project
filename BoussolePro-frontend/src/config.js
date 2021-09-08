import React, { useContext } from 'react';  
export const config =  'https://boussolepro.net'
//export const config =  'http://localhost:8080'

export const AppConfigContext = React.createContext({});

export const AppConfig = () => {
  function getToken() {
    return localStorage.getItem('TOKEN');
  }

  function isLoggedIn() {
    console.log(localStorage.getItem('loggedIn'), 'iii');
    return localStorage.getItem('loggedIn') === 'true';
  }

  return {
    getToken,
    isLoggedIn
  }
}

export const useConfig = () => useContext(AppConfigContext);