import { hashHistory } from 'react-router';
import axios from 'axios';

export const GET_PLAYLIST = 'GET_PLAYLIST';
export const GET_SONG = 'GET_SONG';

export function getPlaylist() {
  const config = {
    headers: { authorization: `Bearer ${localStorage.getItem('token')}`},
  };
  const request = axios.get('/playlist', config)
  .then((response) => {
    console.log('got playlist response: ', resp);
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
  const songRequest = axios.get('/songs', config)
  .then((response) => {
    console.log('got songs response: ', resp);
    return response;
  });
  return {
    type: 'GET_SONG',
    payload: songRequest,
  }
}
