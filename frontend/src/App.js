// /** @jsxImportSource @emotion/react */
import Map from "./components/map";
import './App.css';

const App = ({rest}) => {
    return(
        <div className="App">
            <Map  rest={rest}/>
        </div>
    )
}

export default App;