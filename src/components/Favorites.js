
import { useState } from 'react';
const Favorites = ({ list, changeList}) => {
    
 
    return (
      <div>
        <ul className="shadow-lg p-3 mb-5 bg-body rounded">
                {list.map((el) => (
                  <li key={el.id}><p onClick={() => changeList(el)} className={`rounded-pill fs-1 ${el.sex === "m" ? "boy" : "girl"}`}>{el.name}</p></li>
          ))}
        </ul>
      </div>
    );


}
export default Favorites