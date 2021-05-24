/* eslint-disable prefer-const */
import { config } from '../config/index';

function getUrlWithParamsConfig(endpointConfig: keyof typeof config.client.endpoint, query: object) {
  let url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
    query: {
      ...query,
    },
  };
  return url;
}

export default getUrlWithParamsConfig;
