import React, { Component } from 'react'
import {AddToDo} from '../Operation/AddToDo'
export default class Header extends Component {
constructor(props:any){
    super(props);
    this._onClickButton=this._onClickButton.bind(this);
}
_onClickButton(){
    console.log('click happened');
    AddToDo('taoao');
}


    render() {
        return (
            <div>
                <h1>Here is the app to manage your Todo list</h1>
                <button onClick={this._onClickButton}>Click here to add something</button>                
            </div>
        )
    }
}
