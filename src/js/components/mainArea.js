import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import Listitem from './listitem.js';

export default class MainArea extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
           

            todoInputValue: ""
        }
    }

    onChangeTodoInput(event){

        this.setState({todoInputValue:event.target.value})
    }

    onClickAddButton(event){
        let addItem = {label:this.state.todoInputValue};
        let todoList = this.props.todoList.slice();
        todoList.push(addItem);

        this.setState({
            todoList: todoList,
            todoInputValue:""
        });
    }

    onCompleteTodo(id) {
        let _state =Object.assign({},this.props);
        for(var i=0;i<_state.todoList.length;i++){
            if(_state.todoList[i].id == id){
                _state.todoList[i].completed = true;
                break;
            }
        }
        this.setState(_state);
    }

    onDeleteTodo(id) {
        let _state =Object.assign({},this.props);
        for(var i=0;i<_state.todoList.length;i++){
            if(_state.todoList[i].id == id){
                _state.todoList.splice(i,1);
                break;
            }
        }
        this.setState(_state);
    }

    renderTodoItems() {
        let todoItemDom = [];
        for(var i=0;i<this.props.todoList.length;i++){
            if(!this.props.todoList[i].completed){
                let todoItem = <Listitem key={"item"+i} data={this.props.todoList[i]} completeTodo={this.onCompleteTodo.bind(this)} deleteTodo={this.onDeleteTodo.bind(this)}/>;
                todoItemDom.push(todoItem);
            }
        }
        return todoItemDom;
    }

    render() {
        return(
            <div className="main-area">
            <Header />
            <main className="list-area">
                <div className="todo-input-area">
                    <input type="text" className="todo-input" placeholder="Todoを追加" value={this.state.todoInputValue} onChange={this.onChangeTodoInput.bind(this)}></input>
                    <button className="add-button"
                            onClick={this.onClickAddButton.bind(this)}>register</button>
                </div>
                <ul className="todo-list">
                    {this.renderTodoItems()}
                </ul>
            </main>
            <Footer />
            </div>
        );
    }
}