import { useRef, useState } from 'react';
import { DetailedPokemonApi } from '../../PokemonTypes';
import PokemonFaceCard from './PokemonFaceCard';
import PokemonBackCard from './PokemonBackCard';

type PokemonRowProps = {
  pokemon: DetailedPokemonApi;
};

const PokemonRow = ({ pokemon }: PokemonRowProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const faceCard = useRef<HTMLDivElement>(null);
  const backCard = useRef(null);

  const flipCard = async () => {
    if (faceCard?.current) {
      await faceCard.current.animate(
        [
          {
            transform: `
              translate(50%)
              rotateY(180deg)
            `,
          },
          {
            position: 'absolute',
            transform: 'scale(2)',
            // top: '50%',
            // bottom: '50%'
            left: '50%',
            // margin: '0px -50px -50px -50px',
            width: '100px',
            height: '100px',
          },
        ],
        {
          duration: 1000,
          easing: 'ease-in-out',
        },
      ).finished;
    }
    setIsVisible(!isVisible);
  };
  const unflipCard = () => {
    setIsVisible(!isVisible); // aquele botao n vai ser necessario
  };
  return (
    <>
      {isVisible && (
        <button aria-label="open details" type="button" className="m-3" onClick={() => flipCard()}>
          <PokemonFaceCard ref={faceCard} pokemon={pokemon} />
        </button>
      )}
      {!isVisible && (
        <button aria-label="close details" type="button" onClick={() => unflipCard()}>
          <PokemonBackCard ref={backCard} pokemon={pokemon} />
        </button>
      )}
    </>
  );
};

export default PokemonRow;
