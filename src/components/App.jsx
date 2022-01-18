import {Route, Routes} from "react-router-dom";
import {routes} from './routes';

function App() {
    return (
        <div className="App">
            <Routes>
                {routes.map((route, index) => {
                    return <Route
                        element={route.element}
                        path={route.path}
                        key={index}
                    />
                })}
            </Routes>
        </div>
    );
}

export default App;
