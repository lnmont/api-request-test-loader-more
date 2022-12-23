import styled from "styled-components";

export const ContainerApp = styled.div`
  width: 100%;
  max-width: 124.6rem;
  margin: 0 auto;
  padding: 4rem 1.5rem;
`;

export const HeaderApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.6rem;
  margin-bottom: 1.6rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  h1 {
    font-size: 3.2rem;
  }

  span {
    font-size: 1.6rem;
    opacity: 0.6;
  }
`;

export const ContentCharacters = styled.div`
  .listCards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.6rem;
  }

  button {
    display: block;
    line-height: 6.5rem;
    background: #5b1fa6;
    width: 30rem;
    margin: 0 auto;
    cursor: pointer;
    border: none;
    font-size: 1.8rem;
    color: #fff;
    margin-top: 4.8rem;
    border-radius: 6px;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const Loader = styled.div`
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 5%;
    }
 
`;
