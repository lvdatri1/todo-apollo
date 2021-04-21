import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MainToDos from './Components/MainToDos';
export default class App1 extends Component {
    render() {
        return (
            <div>
                <Header />
                <h1>hello new app</h1>
                <MainToDos />
                <Footer />
            </div>
        )
    }
}
