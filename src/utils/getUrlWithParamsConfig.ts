/* eslint-disable prefer-const */
import { config } from '../config/index';

function getUrlWithParamsConfig(endpointConfig: keyof typeof config.client.endpoint) {
  let url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
  };
  return url;
}

export default getUrlWithParamsConfig;
