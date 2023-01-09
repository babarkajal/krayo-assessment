import { connect } from "react-redux";
import Signup from "./Components/Signup";
import UserPortal from "./Components/UserPortal";

function App(props) {
  const { userDetails } = props;
  return (
    <div className="App">{!userDetails ? <Signup /> : <UserPortal />}</div>
  );
}

const mapStateToProps = (state) => {
  return { userDetails: state.appData.userDetails };
};

export default connect(mapStateToProps)(App);
