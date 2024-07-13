import { useEffect, useState } from 'react';
import { ApiStructure, PokemonType } from '../../PokemonTypes';
import capitalizeFirstLetter from '../../Formatters/StringFormatter';

type PokemonFilterProps = {
  selectedType: PokemonType | undefined;
  selectType: (type: PokemonType | undefined) => void;
};

const fetchTypes = () => fetch('https://pokeapi.co/api/v2/type/?limit=50').then((response) => response.json());

const PokemonFilter = ({ selectedType, selectType }: PokemonFilterProps) => {
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
        defaultValue={selectedType}
        onChange={(event) => selectType(event.currentTarget.value as PokemonType)}
        className="p-1 border-2 rounded"
      >
        <option key="All" value={undefined} label="All" />
        {types.map((type) => (
          <option key={type} value={type}>
            {capitalizeFirstLetter(type)}
          </option>
        ))}
      </select>
    </>
  );
};

export default PokemonFilter;
