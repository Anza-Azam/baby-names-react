
import { useState } from 'react';
const Favorites = ({ list, changeList}) => {
    
 
    return (
      <div>
        <p className="fs-1 px-5 mx-5 form-control-lg"> Favorite Names </p>
        <ul className="shadow-lg p-3 mb-5 bg-success rounded-3">
          {list.map((el) => (
            <li key={el.id}>
              <p
                onClick={() => changeList(el)}
                className={`rounded-pill fs-1 ${el.sex === "m" ? "boy" : "girl"}`}
              >
                {el.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );


}
export default Favorites