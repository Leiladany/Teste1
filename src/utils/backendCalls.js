import {request} from './request';

export const login = async values => {
  try {
    const response = await request({
      url: '/user/login',
      method: 'post',
      data: values,
    });
    if (response?.data.token) {
      return response?.data.token;
    }
  } catch (e) {
    console.log('e', e);
  }
};

export const signup = async values => {
  try {
    const response = await request({
      url: '/user/register',
      method: 'post',
      data: values,
    });
    if (response) {
      const {email, password} = values;
      const loginResponse = await login({email, password});
      console.log('loginResponse', loginResponse);
      return loginResponse;
    }
  } catch (e) {
    console.log('e', e);
  }
};
