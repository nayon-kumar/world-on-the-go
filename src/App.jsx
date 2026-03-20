import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <div>
      <h1>
        <FontAwesomeIcon icon={faHeart} />
        Hello!
      </h1>
    </div>
  );
};

export default App;
