import './SearchBar.css';
import { useState } from 'react';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  }
  const handleClearClick = () => {
    setSearchValue('');
  }
  const clearButtonToggle = () => {
    if (searchValue.length > 0) {
      return <button onClick={handleClearClick}>CLEAR</button>
    }
  }

  //const shouldDisplayButton = searchValue.length > 0;

  return (
    <div>
      <h1> From Search Bar Component </h1>
      <input type="text" value={searchValue} onChange={handleInputChange} />
      {/*{searchValue.length > 0 && <button onClick={handleClearClick}>CLEAR</button>}*/}
      {clearButtonToggle()}
    </div>
  )
}

export default SearchBar;
