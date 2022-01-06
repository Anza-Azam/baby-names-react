import { useState} from 'react'
const Selection = ({list, change ,faveNameList}) => {
    
    let nameList = list.filter((names) => !faveNameList.includes(names));
  //  const [names, setNames ]= useState(list)
    
    const showGirlNames = () => {
      
        let girlNames = nameList.filter(names => names.sex === "f")
      
            return change(girlNames) 
    }
    
    const showBoysNames = () => {
       
        let boyNames = nameList.filter((names) => names.sex === "m");
     
        return change(boyNames);
        
    };

    const handle= () => {
      //let name =list;
      //  setNames(boyNames)
      return change(nameList);
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