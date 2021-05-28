import getUrlWithParamsConfig from './getUrlWithParamsConfig';

describe('getUrlWithParamsConfig', () => {
  test('Должна принимать два аргумента "getPokemons" и пустой объект, на выходе получить объект с полями pathname, protocol, host, и пустым query', () => {
    const url = getUrlWithParamsConfig('getPokemons', {});

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemons',
        query: {},
      },
      body: {},
    });
  });

  test('Должна принимать два аргумента "getPokemon" и {id: 25}, на выходе получить объект с полями pathname, protocol, host, и пустым query', () => {
    const url = getUrlWithParamsConfig('getPokemon', { id: 25 });

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/25',
        query: {},
      },
      body: {},
    });
  });

  test('Должна принимать два аргумента "getPokemon" и {id: 25, name: "Pikachu"}, на выходе получить объект с полями pathname, protocol, host, и пустым query', () => {
    const url = getUrlWithParamsConfig('createPokemon', { name: 'Pikachu' });

    expect(url).toEqual({
      method: 'POST',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/create',
        query: {},
      },
      body: {
        name: 'Pikachu',
      },
    });
  });
});
