import { useEffect, useState } from 'react';
import { ApiStructure, PokemonType } from '../../PokemonTypes';

type PokemonFilterProps = {
  selectType: (type: PokemonType | undefined) => void;
};

const fetchTypes = () => fetch('https://pokeapi.co/api/v2/type/?limit=50').then((response) => response.json());

const PokemonFilter = ({ selectType }: PokemonFilterProps) => {
  const [types, setTypes] = useState<PokemonType[]>([]);
  useEffect(() => {
    fetchTypes().then((data) => {
      setTypes(data.results.map((result: ApiStructure) => result.name));
    });
  }, []);

  return (
    <>
      <span>Type: </span>
      <select
        onChange={(event) => selectType(event.currentTarget.value as PokemonType)}
        className="bg-slate-100 p-1 border-2 rounded capitalize"
      >
        <option key="All" value={undefined} label="All" />
        {types.map((type) => (
          <option className="capitalize" key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </>
  );
};

export default PokemonFilter;
