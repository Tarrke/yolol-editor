import React from 'react';
import Menu from './menu';
import Side from './side';
import Editor from './editor';
import '../index.css';

export default class Main extends React.Component {
    render() {
        return (
            <div className="flex-container wrapper">
                <Menu />
                <Editor />
                <Side />
            </div>
      );
    }
}