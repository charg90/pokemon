import { useState, useEffect } from "react";

import { useFetch } from "./../../customHooks/useFetch";
import { Row } from "react-bootstrap";
import Pokemon from "./Pokemon";
import Loading from "./loading";
import Paginate from "./../Paginate";

const Pokemons = ({ search }) => {
  const [url, setUrl] = useState();
  useEffect(() => {
    const newUrl = !search
      ? null
      : `https://pokeapi.co/api/v2/pokemon/${search}`;
    setUrl(newUrl);
    console.log(newUrl);
  }, [search]);
  const [pokemons, fetching, fullData] = useFetch(url);

  const handlerPage = (newUrl) => {
    setUrl(`?${newUrl}`);
  };

  return (
    <>
      <Row>
        {fetching ? (
          <Loading />
        ) : (
          pokemons.map((pokemon) => <Pokemon key={pokemon.id} {...pokemon} />)
        )}
      </Row>
      <Paginate
        next={fullData.next}
        previous={fullData.previous}
        handlerPage={handlerPage}
      />
    </>
  );
};

export default Pokemons;
