// let data = require('../babyNamesData.json')
import Names from './Names.js'



const NameList = ({list}) => {
let nameList = list.sort((a, b) => a.name.localeCompare(b.name));
    //console.log(list)

    return (
      <div>
        {" "}
       
        <ul className="shadow-lg p-3 mb-5 bg-body rounded">
          {[...nameList].map((el) => (
            <Names key={el.id} name={el} />
          ))}
        </ul>{" "}
      </div>
    );
            }

            export default NameList;