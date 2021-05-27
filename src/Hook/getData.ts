import { useState, useEffect } from 'react';
import req from '../utils/request';
// import IPokemonCard from '../pages/Pokedex/interface';
import { config } from '../config/index';

// interface Api {
//   total: number;
//   count: number;
//   limit: number;
//   offset: number;
//   pokemons: IPokemonCard[];
// }

// interface Data {
//   data?: Api;
//   isLoading?: boolean;
//   isError?: boolean;
// }

const useData = <T>(endpoint: keyof typeof config.client.endpoint, query: object, deps: any[] = []) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getData = async (): Promise<void> => {
      setIsLoading(true);

      try {
        const result = await req<T>(endpoint, query);

        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, deps);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useData;
