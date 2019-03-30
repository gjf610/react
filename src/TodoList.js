import React, { Component } from 'react'
import 'antd/dist/antd.css'
import TodoListUI from './TodoListUI'
import store from './store'
import {getInputChangeAction, getAddItemAction, getDeleteItemAction, initListAction} from './store/actionCreators'
import axios from 'axios'
import { strict } from 'assert';


class TodoList extends Component{
  constructor(props){
    super(props)
    this.state = store.getState()
    this.handleInputChange=this.handleInputChange.bind(this)
    this.handleStoreChange=this.handleStoreChange.bind(this)
    this.handleBtnClick=this.handleBtnClick.bind(this)
    this.handleDeleteItem=this.handleDeleteItem.bind(this)
    store.subscribe(this.handleStoreChange)
  }

  componentDidMount() {
    axios.get('http://localhost:3030/list').then((res)=>{
      const data = res.data;
      const action = initListAction(data)
      store.dispatch(action)
      console.log(action)
    })
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleDeleteItem={this.handleDeleteItem}
      />
    )
  }
  handleInputChange(e){
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleBtnClick(){
    const action = getAddItemAction()
    store.dispatch(action)
  }

  handleDeleteItem(index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }

  handleStoreChange(){
    this.setState(store.getState())
  }
}

export default TodoList