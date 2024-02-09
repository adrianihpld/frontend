// imports useState
import React, { useState  } from 'react'

// defines a type "Props" to be used
type Props = {};

// defines the function "Search2" which allows users to enter text into the input. 
//React.FC<> validates that a prop is used when searching.
// JSX.Element?

const Search2: React.FC<Props> = (props: Props): JSX.Element => {
    const [search, setSearch] = useState<string>("")


    const onClick = (e: any) => {
        setSearch(e.target.value);
        console.log(e);
    };
    return (
    <div>
        <input value={search} onChange={(e) => onClick(e)}></input>
    </div>
  );
};

export default Search2