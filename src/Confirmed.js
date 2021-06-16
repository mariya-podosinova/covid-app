import { Switch, Route, useParams } from "react-router-dom";

const Confirmed = ({ data }) => {
  let { slug } = useParams();
  return (
    <p className="result">
      CONFIRMED:{" "}
      {data && data.length > 0
        ? data[data.length - 1].Cases
        : "no data available"}
    </p>
  );
};
const routerTest = () => {
  return (
    <Switch>
      <Route path="/">
        <p>No country selected</p>{" "}
      </Route>
      <Route path="/:slug">
        <Confirmed />{" "}
      </Route>{" "}
    </Switch>
  );
};

export default Confirmed;
