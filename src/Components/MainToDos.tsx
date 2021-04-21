import React, { Component } from 'react';
import {AllToDos} from '../Operation/GetToDos';

export default class MainToDos extends Component {
constructor(props: any){
    super(props);
this._onClickButton=this._onClickButton.bind(this);
}
_onClickButton(){
    var x: string[];
    x=AllToDos;

    console.log(x);
}
    render() {

        return (
            <div>
                Main todos
             <button onClick={this._onClickButton}>Click here to have information</button>
            </div>
        )
    }
}
