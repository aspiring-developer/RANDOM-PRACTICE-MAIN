import './SearchBar.css';
import {useState} from 'react';

const SearchBar = () => {
const [searchValue, setSearchValue] = useState('Search...');

const handleInputChange = (e) => {
  console.log(e.target.value);
  setSearchValue(e.target.value);
}


  return (
    <div>
      <h1> From Search Bar Component </h1>
      <input type="text" value={searchValue} onChange={handleInputChange}/>
      <br />
      {searchValue}
    </div>
  )
}

export default SearchBar;
