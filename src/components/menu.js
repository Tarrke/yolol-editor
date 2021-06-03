import React from 'react';
import Button from 'react-bootstrap/Button';
import '../index.css';

export default class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: true,
        }
    }

    handleCollapseClick = () => {
        this.setState(
            state => ({
                collapsed: !state.collapsed
            })
        );
    }

    render() {
        const buttonText = (this.state.collapsed?"+":"Collapse");
        const inStyle = (this.state.collapsed?{ 'max-width': '75px' }:{'max-width': '200px'});
        /* This will "center" the button in the collapsed zone but is not nice to look at...*/ 
        // const inButtonStyle = (this.state.collapsed?{'width': '45px', 'height': '45px'}:{});
        const inButtonStyle = {};
        return (
                <nav className="menu" style={inStyle}>
                    <Button style={inButtonStyle} variant="primary" onClick={this.handleCollapseClick}>{buttonText}</Button>
                    <ul>
                        <li><a href="index.html">item 1</a></li>
                        <li><a href="index.html">item 2</a></li>
                        <li><a href="index.html">item 3</a></li>
                        <li><a href="index.html">item 4</a></li>
                        <li><a href="index.html">item 5</a></li>
                    </ul>
                </nav>
        );
    }
}

/*
                    
*/