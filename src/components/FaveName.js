
const FaveName = ({name,clickfunc}) => {

return (
    <li key={name.id}>
    <p
      className={`rounded-pill fs-1 ${name.sex === "m" ? "boy" : "girl"}`}
      onClick={() => clickfunc(name)}
    >
      {name.name}
    </p>
  </li>
);
}

export default FaveName