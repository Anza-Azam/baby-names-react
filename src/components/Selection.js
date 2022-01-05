const Selection = ({ list, changeGender }) => {
  const showGirlNames = () => {
    let girlNames = list.filter((names) => names.sex === "f");
    return changeGender(girlNames);
  };
  const showAllNames = () => {
    return changeGender(names);
  };
  const showBoysNames = () => {
    let boyNames = list.filter((names) => names.sex === "m");
    return changeGender(boyNames);
  };
  return (
    <div className="d-flex justify-content-center">
      <button className="girl btn-lg mb-5" onClick={() => showGirlNames()}>
        Girl'sNames
      </button>
      <button className="btn-lg mb-5" onClick={() => showAllNames()}>
        All Names
      </button>
      <button className="boy btn-lg mb-5" onClick={() => showBoysNames()}>
        Boy's Names
      </button>
      <br></br>
    </div>
  );
};

export default Selection;
