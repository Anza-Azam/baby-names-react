import { useState} from 'react'
const Selection = ({ list, changeGender,handlenames }) => {
    const [names, setNames ]= useState(list)
    
    const showGirlNames = () => {
      
        let girlNames = list.filter(names => names.sex === "f")
       // setNames(girlNames)
            return changeGender(girlNames) 
    }
    
    const showBoysNames = () => {
       
        let boyNames = list.filter((names) => names.sex === "m");
      //  setNames(boyNames)
        return changeGender(boyNames);
        
    };

    const handle= () => {
      let name =list;
      //  setNames(boyNames)
      return changeGender(name);
    };
    return (
        <div className="d-flex justify-content-center">
            <button className="girl btn-lg mb-5" onClick={() => showGirlNames()}>
          Girl'sNames
        </button>
        <button className="btn-lg mb-5" onClick={()=>handle()}>
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