import { useState } from "react";
import { Container } from "react-bootstrap";
import Pokemons from "./components/pokemones";
import SearchBar from "./components/SearchBar";

function App() {
  const [search, setSearch] = useState(null);
  const handlerSearch = (name) => {
    setSearch(name);
  };

  return (
    <Container>
      <SearchBar handlerSearch={handlerSearch} />
      <Pokemons search={search} />
    </Container>
  );
}

export default App;
