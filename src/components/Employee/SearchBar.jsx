export default function SearchBar(props) {
  return (
    <div className="search-bar">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Search with name"
        onChange={(e) => props.setName(e.target.value)}
      />
      <img src="./search-icon.svg" alt="search" />
    </div>
  );
}
