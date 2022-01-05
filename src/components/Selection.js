import { useState} from 'react'
const Selection = ({ list, changeGender }) => {
    const [names, setNames ]= useState(list)
    
    const showGirlNames = () => {
        let girlNames = list.filter(names => names.sex === 'f')
        if (girlNames)
            setNames(girlNames);
        else setNames(list)
           changeGender(names) 
    }
    const showAllNames = (list) => {
        setNames(list)
        changeGender(names); 
     };
    const showBoysNames = () => {
        let boysNames = list.filter((names) => names.sex === "m");
        if (boysNames) setNames(boysNames);
        else
            setNames(list);
        changeGender(names); 
    };
    return (
      <div className="d-flex justify-content-center">
        <button className="girl btn-lg mb-5" onClick={()=>showGirlNames()}>
          Girl'sNames
        </button>
        <button className="btn-lg mb-5" onClick={()=>showAllNames()}>
          All Names
        </button>
        <button className="boy btn-lg mb-5" onClick={()=>showBoysNames()}>
          Boy's Names
        </button>
        <br></br>
      </div>
    );





}

export default Selection;