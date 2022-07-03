import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Main from './layout/Main';
import './style/main.css';
import Home from './pages/Home';
import Books from './pages/Books';
import Contact from './pages/Contact';

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route index element={<Home/>}/>
                    <Route path="books" element={<Books/>}/>
                    <Route path="contact" element={<Contact/>}/>
                </Route>
            </Routes>
        </HashRouter>
    );
};

ReactDOM.render(<App/>, document.getElementById("root"));