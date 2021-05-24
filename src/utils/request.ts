/* eslint-disable no-console */
import Url from 'url';
import { config } from '../config/index';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req<T>(endpoint: keyof typeof config.client.endpoint, query: object): Promise<T> {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query));
  const res = await fetch(uri).then((res) => res.json());
  return res;
}

export default req;
