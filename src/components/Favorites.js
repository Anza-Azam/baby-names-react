
import FaveName from './FaveName.js'
const Favorites = ({ list, changeList}) => {
    
 
    return (
      <div>
        <p className="fs-1 px-5 mx-5 form-control-lg"> Favorite Names </p>
        <ul className="shadow-lg p-3 mb-5 bg-success rounded-3">
          {list.map((el) => <FaveName name={el} func={changeList} key={el.id}/>) }
        </ul>
      </div>
    );


}
export default Favorites