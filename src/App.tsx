import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MainList from './Components/MainList'

export default class App1 extends Component {
    render() {
        return (
            <div>
                <Header />
                <h1>hello new app</h1>
                <MainList />
                <Footer />
            </div>
        )
    }
}
