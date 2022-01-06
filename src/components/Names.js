
const Names = ({name,fav}) => {
  const handleFavorite = () => {
    console.log('hi')
return fav(name)

   }
let sex=name.sex
    return (
      <li key={name.id}>
        <p className={`rounded-pill fs-1 ${sex === "m" ? "boy" : "girl"}`} onClick={()=>handleFavorite()} >
          {name.name}
        </p>{" "}
      </li>
    );
}

export default Names;
