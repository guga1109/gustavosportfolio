import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.css';

const App = () => {
    return (
        <div>
            <div className="sidebar">
                <button><span class="material-icons">home</span></button>
                <button><span class="material-icons">email</span></button>
                <button><span class="material-icons">auto_stories</span></button>
            </div>
            <div className="main-content">
                <div className="row full-height">
                    <div className="column-6 justify-center text-white text-big">
                        <p>Hi,</p>
                        <p>I'm Gustavo and</p>
                        <p>I am a full stack developer.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById("root"));