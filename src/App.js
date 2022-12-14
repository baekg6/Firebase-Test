import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

function App() {
    const { isAuthReady, user } = useAuthContext();
    return (
        <div className="App">
            {/* 인증 정보를 가져온 후 렌더링 */}
            {isAuthReady ? (
                <BrowserRouter>
                    <Nav />
                    <Routes>
                        <Route
                            path="/"
                            element={user ? <Home /> : <Navigate replace={true} to="/login"></Navigate>}
                        ></Route>
                        <Route
                            path="/login"
                            element={!user ? <Login /> : <Navigate replace={true} to="/"></Navigate>}
                        ></Route>
                        <Route
                            path="/signup"
                            element={!user ? <Signup /> : <Navigate replace={true} to="/"></Navigate>}
                        ></Route>
                    </Routes>
                </BrowserRouter>
            ) : (
                'loading...'
            )}
        </div>
    );
}

export default App;
