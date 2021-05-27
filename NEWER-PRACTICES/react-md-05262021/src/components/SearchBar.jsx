import './SearchBar.css';
import {useState} from 'react';

const SearchBar = () => {
const [searchValue, setSearchValue] = useState('');

const handleInputChange = (e) => {
  console.log(e.target.value);
  setSearchValue(e.target.value);
}
const handleClearClick = () => {
  setSearchValue('');
}


  return (
    <div>
      <h1> From Search Bar Component </h1>
      <input type="text" value={searchValue} onChange={handleInputChange}/>
     <button onClick={handleClearClick}>CLEAR</button>
    </div>
  )
}

export default SearchBar;
