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
  const [total, setTotal] = useState(names);
const [faveNameList, setFaveNameList] = useState([]);  
  const handleInput = (searchresults) => {
    setNamesList(searchresults)
 
  }

 
  const changeGender = (fav) => {
    setNamesList(fav)
   
  }
  const handlefavnames=(fav) => {
    setFaveNameList(faveNameList.concat(fav))
   // let id = (namesList.findIndex(list => list.id === fav.id))
   // let deleted= (namesList.splice(id, 1))
    setNamesList([...namesList].filter(name=>name.id!==fav.id))

  }
  const removeFavorite = (fav) => {
  
    setNamesList(namesList.filter(name=>name.id!==fav.id).concat(fav));
    //let id = faveNameList.findIndex((list) => list.id === fav.id);
    //let deleted = faveNameList.splice(id, 1);
setFaveNameList([...faveNameList].filter(name=>name.id!==fav.id));
  }
  if(!namesList)
        setNamesList(names)
  return (
    <div className="container-fluid">
      <Header />
      <Search
        list={namesList}
        searched={(searchresults) => handleInput(searchresults)}
      />
      <Favorites list={faveNameList} changeList={(id) => removeFavorite(id)} />
      <Selection
        list={names}
        change={(fav) => changeGender(fav)}
        faveNameList={faveNameList}
      />
      <NameList
        list={namesList}
        favorite={(fav) => handlefavnames(fav)}
        faveNameList={faveNameList}
      />
    </div>
  );
}

export default App;
