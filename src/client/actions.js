import { hashHistory } from 'react-router';
import axios from 'axios';

export const GET_PLAYLIST = 'GET_PLAYLIST';
export const GET_SONG = 'GET_SONG';
export const GET_USERINFO = 'GET_USERINFO';

export function getPlaylist() {
  const config = {
    headers: { authorization: `Bearer ${localStorage.getItem('token')}`},
  };
  const request = axios.get('/api/playlist', config)
  .then((response) => {
    console.log('got playlist response: ', response);
    return response;
  });
  return {
    type: 'GET_PLAYLIST',
    payload: request,
  }
}

export function getSong() {
  const config = {
    headers: { authorization: `Bearer ${localStorage.getItem('token')}`},
  };
  const songRequest = axios.get('/api/savedtracks', config)
  .then((response) => {
    console.log('got songs response: ', response);
    return response;
  });
  return {
    type: 'GET_SONG',
    payload: songRequest,
  }
}

export function userInfo() {
  const config = {
    headers: { authorization: `Bearer ${localStorage.getItem('token')}`},
  };
  const userInfoReq = axios.get('/api/userinfo', config);
  return {
    type: 'GET_USERINFO',
    payload: userInfoReq,
  }
}
