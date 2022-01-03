import logo from "./logo.svg";
import { useState} from "react"
import Header from "./components/Header.js"
import NameList from "./components/NameList.js"
const names=require('./babyNamesData.json')

import "./App.css";
import Search from "./components/Search";
import Favorites from './components/Favorites';

function App() {
  const [namesList, setNamesList] = useState(names);
  const [faveName, setFaveName] = useState('');
const [faveNameList, setFaveNameList] = useState([]);  
  const handleInput = (searchresults) => {
    setNamesList(searchresults)
 
  }

  const handlefavnames=(fav) => {
    setFaveNameList(faveNameList.concat(fav))
     setNamesList(namesList.filter(list=>list.id!==fav.id))

  }
  if(!namesList)
        setNamesList(names)
  return (
      
    <div className="container-fluid">    
      <Header />
      <Search list={namesList} searched={(searchresults) => handleInput(searchresults)} />
      <Favorites list={faveNameList}/>
      <NameList list={namesList} favorite={(fav)=>handlefavnames(fav)}/>

    </div>
  );
}

export default App;
