import React, {Component} from 'react';
import './index.css'

class App extends Component {
    handleDarkMode = () => {
        window.document.body.setAttribute('data-theme', 'dark')
    }

    handleLightMode = () => {
        window.document.body.setAttribute('data-theme', 'default')
    }

    render() {
        return (
            <div className='container'>
                <div className="box">
                    <h1> Css is awersome</h1>
                </div>


                <div className="pane">
                    <button onClick={this.handleDarkMode}>Темная тема</button>
                    <button onClick={this.handleLightMode}>Светлая тема</button>
                </div>
            </div>
        );
    }
}

export default App;
