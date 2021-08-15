// /** @jsxImportSource @emotion/react */
import Rest from "./service/rest";
import Map from "./components/map";
import './App.css';
const rest = new Rest();

const App = (props) => {


    return(
        <div className="App">
            <Map />
        </div>
    )
}

export default App;