import logo from "./logo.svg";
import { useState} from "react"
import Header from "./components/Header.js"
import NameList from "./components/NameList.js"
const names=require('./babyNamesData.json')
import Selection from './components/Selection.js'
import "./App.css";
import Search from "./components/Search";
import Favorites from './components/Favorites';

function App() {
  const [namesList, setNamesList] = useState(names);
 
const [faveNameList, setFaveNameList] = useState([]);  
  const handleInput = (searchresults) => {
    setNamesList(searchresults)
 
  }

 
  const changeGender = (fav) => {
    setNamesList(fav)
   
  }
  const handlefavnames=(fav) => {
    setFaveNameList(faveNameList.concat(fav))
    let id = (namesList.findIndex(list => list.id === fav.id))
    let deleted= (namesList.splice(id, 1))
    setNamesList(namesList)

  }
  const removeFavorite = (fav) => {
    setNamesList(namesList.concat(fav));
    let id = faveNameList.findIndex((list) => list.id === fav.id);
    let deleted = faveNameList.splice(id, 1);
setFaveNameList(faveNameList);
  }
  if(!namesList)
        setNamesList(names)
  return (
      
    <div className="container-fluid">    
      <Header />
      <Search list={namesList} searched={(searchresults) => handleInput(searchresults)} />
      <Favorites list={faveNameList} changeList={(id) => removeFavorite(id)} />
      <Selection list={names} changeGender={(fav) => changeGender(fav)} />
      <NameList list={namesList} favorite={(fav) => handlefavnames(fav)} faveNameList={faveNameList}/>

    </div>
  );
}

export default App;
