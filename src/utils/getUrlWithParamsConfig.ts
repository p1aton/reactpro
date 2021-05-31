import { config } from './../config/index';
/* eslint-disable prefer-const */

interface IApiConfigUri {
  host: string;
  protocol: string;
  pathname: string;
  query?: object;
}

interface IEndpoint {
  method: string;
  uri: {
    pathname: string;
    query?: object;
  };
}

function getUrlWithParamsConfig(endpointConfig: keyof typeof config.client.endpoint, params: any) {
  const { method, uri }: IEndpoint = config.client.endpoint[endpointConfig as keyof typeof config.client.endpoint];
  let body = {};

  const apiConfigUri: IApiConfigUri = {
    ...config.client.server,
    ...uri,
    query: {
      ...uri.query,
    },
  };

  const query = {
    ...params,
  };

  /*редьюс идет по массиву собирая данные в переменную, и потом возвращает ее после того как пройдется по всему массиву 
  и прикол его в том что ты можешь вернуть что угодно)строку, объект. число, новый массив, булевскую. 
  Короче это самый крутой метод*/

  // что делает Object.keys просто берет ключи объекта и превращает их в массив ключей

  // indexOf просто узнаете есть ли в строке искомая строка

  // replace заменяет одно на второе

  const pathname = Object.keys(query).reduce((acc, val) => {
    if (acc.indexOf(`{${val}}`) !== -1) {
      const result = acc.replace(`{${val}}`, query[val as keyof typeof query]);
      delete query[val as keyof typeof query];

      return result;
    }
    return acc;
  }, apiConfigUri.pathname);

  apiConfigUri.pathname = pathname;

  if (method === 'GET') {
    apiConfigUri.query = {
      ...apiConfigUri.query,
      ...query,
    };
  } else {
    body = query;
  }

  return {
    method,
    uri: apiConfigUri,
    body,
  };
}

export default getUrlWithParamsConfig;
