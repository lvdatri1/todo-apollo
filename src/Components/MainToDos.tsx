import React, { Component } from 'react';
import {AllToDos} from '../Operation/GetToDos';

interface PropsType{}
interface StateType{
list:string[]
}
export default class MainToDos extends Component<PropsType, StateType> {
constructor(props: any, state: StateType){
    super(props);
this._onClickButton=this._onClickButton.bind(this);
this.setState({list:[]});
this._renderList=this._renderList.bind(this);
}
_onClickButton(){
    var x: string[];
    x=AllToDos;
this.setState({list:x});
    console.log(x);
}
_renderList(){
    if(this.state==null) return <div>nolist</div>
    const todoItems = this.state.list.map((item: string, index: number) =>
  <li key={index}>
    {item}
  </li>);
  return todoItems;
}
    render() {

        return (
            <div>
                Main todos
             <button onClick={this._onClickButton}>Click here to have information</button>
           <br/>{this._renderList()}
            </div>
        )
    }
}
