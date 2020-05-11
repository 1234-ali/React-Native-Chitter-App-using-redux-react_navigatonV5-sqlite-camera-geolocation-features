import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    // axios.defaults.headers.common['x-auth-token'] = token;
    axios.defaults.headers.common['X-Authorization'] = token;

  } else {
    delete axios.defaults.headers.common['X-Authorization'];
  }
};

export default setAuthToken;