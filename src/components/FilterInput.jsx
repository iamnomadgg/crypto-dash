const FilterInput = ({ onChange, filter }) => {
  return (
    <div className="filter">
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Filter coins by name or symbol"
      />
    </div>
  );
};

export default FilterInput;
