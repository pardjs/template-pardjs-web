import axios from 'axios';

const env = process.env.REACT_APP_ENV || 'prod'

const hosts = {
  dev: '//path.to.dev/api',
  stg: '//path.to.stg/api',
  prod: '//path.to.stg/api'
}

const request = axios.create({
  baseUrl: hosts[env],
});

export const ping = () => request.get('/ping');