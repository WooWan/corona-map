// /** @jsxImportSource @emotion/react */
import Rest from "./service/rest";
import Map from "./components/map";
import './App.css';
import {atom, useRecoilState} from "recoil";
const rest = new Rest();

const responseState = atom({
    key : "patient",
    default: [],
})
const App = (props) => {
    const [patient, setPatient] = useRecoilState(responseState);
    return(
        <div className="App">
            <Map />
        </div>
    )
}

export default App;