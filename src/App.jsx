import React, {Component} from 'react';
import './index.css'
import Button from "./Button";

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
                    <Button onClick={this.handleDarkMode}>Темная тема</Button>
                    <Button onClick={this.handleLightMode} variant='light'>Светлая тема</Button>
                </div>

                <div className="pane">
                    <Button variant='primary'>Просто кнопка</Button>
                </div>

                <div className="pane theme-new">
                    <Button variant='primary'>Перестилизованная кнопка</Button>
                </div>
            </div>
        );
    }
}

export default App;
