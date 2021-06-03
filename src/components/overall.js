import React from 'react';
import Main from './main';
import Header from './headers';
import Footer from './footers';
import '../index.css';

export default class Overall extends React.Component {
    render() {
      return (
        <div id="overall">
            <Header />
            <Main />
            <Footer />
        </div>
      );
    }
}
