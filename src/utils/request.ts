/* eslint-disable no-return-await */
/* eslint-disable no-console */
import Url from 'url';
import { config } from '../config/index';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req(endpoint: keyof typeof config.client.endpoint) {
  const uri = Url.format(getUrlWithParamsConfig(endpoint));
  return await fetch(uri).then((res) => res.json());
}

export default req;
