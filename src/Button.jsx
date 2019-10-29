import React, {Component} from 'react';
import './button.css'
import cn from 'classnames'

class Button extends Component {

    render() {
        const {variant = 'dark', onClick, children} = this.props
        return (
            <button className={cn('btn', `btn--${variant}`)} onClick={onClick}>
                {children}
            </button>
        );
    }
}

export default Button;
