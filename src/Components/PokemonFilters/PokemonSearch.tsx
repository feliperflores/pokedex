type PokemonSearchProps = {
  search: (name: string) => void;
};

const PokemonSearch = ({ search }: PokemonSearchProps) => (
  <>
    <span>Name: </span>
    <input
      defaultValue={undefined}
      type="text"
      maxLength={20}
      onChange={(event) => search(event.currentTarget.value)}
      className="indent-1 bg-slate-100 p-0.5 border-2 rounded"
    />
  </>
);
export default PokemonSearch;
