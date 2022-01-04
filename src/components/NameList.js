// let data = require('../babyNamesData.json')
import Names from './Names.js'



const NameList = ({ list, favorite, faveNameList}) => {
  let nameList= list.filter(names=>!(faveNameList.includes(names)))
 let nameListresult = nameList.sort((a, b) => a.name.localeCompare(b.name));
    //console.log(list)

    return (
      <div>
        {" "}
       
        <ul className="shadow-lg p-3 mb-5 bg-body rounded">
          {[...nameListresult].map((el) => (
            <Names favorite={(s)=>favorite(s)}key={el.id} name={el} />
          ))}
        </ul>{" "}
      </div>
    );
            }

            export default NameList;