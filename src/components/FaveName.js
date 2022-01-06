
const FaveName = ({name,func}) => {


return(
    <li>
        <p
            onClick={() => func(name)}
            className={`rounded-pill fs-1 ${name.sex === "m" ? "boy" : "girl"}`}
        >
            {name.name}
        </p>
    </li>);
}

export default FaveName