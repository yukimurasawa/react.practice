import React from 'react';

export default class Listitem extends React.Component {

    onChengeCheckBox(event) {
        console.log("onChengeCheckBox");
        this.props.completeTodo(event.target.value);
    }

    onClickDeleteTodo(event) {
        this.props.deleteTodo(this.props.data.id)
    }

    render() {
        return (
            <li className="todo-list__item">
            <input type="checkbox" value={this.props.data.id} onChange= {this.onChengeCheckBox.bind(this)}></input>{this.props.data.label}
            <button className="delete-button" onClick= {this.onClickDeleteTodo.bind(this)}>×</button>
            </li>
        )
    }
}