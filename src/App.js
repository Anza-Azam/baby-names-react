import logo from "./logo.svg";
import { useState} from "react"
import Header from "./components/Header.js"
import NameList from "./components/NameList.js"
const names=require('./babyNamesData.json')

import "./App.css";
import Search from "./components/Search";

function App() {
  const [namesList, setNamesList] = useState(names);
  
  const handleInput = (searchresults) => {
    setNamesList(searchresults)
 
  }
  if(!namesList)
        setNamesList(names)
  return (
      
    <div className="container-fluid">    
      <Header />
      <Search list={namesList} searched={(searchresults)=>handleInput(searchresults)}/>
      <NameList list={namesList} />

    </div>
  );
}

export default App;
