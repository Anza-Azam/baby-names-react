import {useState} from "react"
const Search = ({list, searched}) => {
  

   const [userInput, setUserInput] = useState("");
   
   const handleChange = (e) => {
     const word = e.target.value.toLowerCase();
     let searchResults;
     setUserInput(word);
     console.log(word)
     if(word.length>0)
       searchResults = list.filter((list) => list.name.toLowerCase().includes(word)
      
     );
     
     searched(searchResults);
   };

    return (
      <div className="containerwrapper ms-5">
        <label
          htmlFor="name_search"
          className="fs-1 px-5 mx-5 form-control-lg"
        >
          Search Names
        </label>
        <input
          id="name_search"
          type="text" onChange={(e)=>handleChange(e)}
          className="px-5 mx-5 bg-info form-control-lg"
          placeholder="search names with alphabets"
        ></input>
      </div>
    );
   

}
export default Search;