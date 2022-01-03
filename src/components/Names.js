const Names = ({name}) => {
    
let sex=name.sex
    return (
      <li key={name.id}>
        <p className={`rounded-pill fs-1 ${sex === "m" ? "boy" : "girl"}`}>
          {name.name}
        </p>{" "}
      </li>
    );
}

export default Names;
