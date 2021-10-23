import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "./../constants";

export const useFetch = (endpoint = BASE_URL, initialState = {}) => {
  console.log(`endpoint''${endpoint}`);

  const [data, setData] = useState(initialState);
  const [fullData, setFullData] = useState(initialState);
  const [fetching, setfetching] = useState(true);
  const [error, setError] = useState(false);
  const fetchData = async () => {
    try {
      const { data: fullData } = await axios.get(`${BASE_URL}`);

      const { results } = fullData;

      let pokemon = [];
      for (let i = 0; i < results.length; i++) {
        const { data } = await axios.get(results[i].url);

        const { name, sprites, id } = data;
        const { front_shiny: image } = sprites;
        const completePokemon = {
          name,
          image,
          id,
        };
        pokemon.push(completePokemon);
      }

      setFullData(fullData);
      setData(pokemon);
      setfetching(false);
    } catch (error) {
      setData(initialState);
      setfetching(false);
      setError(true);
    }
  };
  useEffect(() => {
    fetchData();
  }, [endpoint]);

  return [data, fetching, fullData];
};
