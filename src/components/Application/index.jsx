import { CardCharacter } from "../CardCharacter/Index";
import { ContainerApp, ContentCharacters, HeaderApp, Loader } from "./styles";

import IconLoader from "../../assets/loader.gif";

import axios from "axios";
import { useEffect, useState } from "react";
import MyLoader from "../LoaderContent";

export function Application() {
  const [character, setCharacter] = useState([]);

  const [page, setPage] = useState(1);

  const [countPage, setCountPage] = useState("");

  const [qtdeCharacteres, setQtdeCharacteres] = useState("");

  const [isLoader, setIsLoader] = useState(true);
  const [buttonLoader, setButtonLoader] = useState(false);

  function handleButtonLoadMore() {
    setPage(page + 1);
    (page && character) && setButtonLoader(true)
  }


  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => {
        const { results } = response.data;
        const { pages } = response.data.info;
        const { count } = response.data.info;

        const allCharacter = [...character, ...results];

        setCharacter(allCharacter);

        setCountPage(pages);

        setQtdeCharacteres(count);

        setIsLoader(false);
        setButtonLoader(false);
      });
  }, [page]);

  return (
    <>
      <ContainerApp>
        <HeaderApp>
          <h1>Ricky And Morty</h1>
          <span>N° de Personagens: {qtdeCharacteres}</span>
        </HeaderApp>
        {isLoader && <MyLoader />}
        <ContentCharacters>
          <div className="listCards">
            {character &&
              character.map(({ id, image, species, name, gender }) => {
                return (
                  <CardCharacter
                    key={id}
                    image={image}
                    name={name}
                    genre={gender}
                    specie={species}
                  />
                );
              })}
          </div>
          {buttonLoader && (
            <Loader>
              <img src={IconLoader} />
            </Loader>
          )}
          {!(page === countPage) && (
            <button onClick={handleButtonLoadMore}>Carregar mais</button>
          )}
        </ContentCharacters>
      </ContainerApp>
    </>
  );
}
