type PokemonSearchProps = {
  search: (name: string) => void;
};

const PokemonSearch = ({ search }: PokemonSearchProps) => (
  <>
    <span>Name: </span>
    <input
      defaultValue={undefined}
      type="text"
      maxLength={50}
      onChange={(event) => search(event.currentTarget.value)}
      className="p-1 border-2 rounded"
    />
  </>
);
export default PokemonSearch;
