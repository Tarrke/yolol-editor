import React from 'react';
import '../index.css';

export default class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
        }
    }

    render() {
        const menuCssClass = 'menu' + (this.state.collapsed?'_collapsed':'');
        return (
            <section className={menuCssClass} id="top_menu">
                <ul>
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                    <li>item 4</li>
                    <li>item 5</li>
                </ul>
            </section>
        );
    }
}
