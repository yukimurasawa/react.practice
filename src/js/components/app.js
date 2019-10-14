import React from 'react';
import SideArea from './sideArea.js';
import MainArea from './mainArea.js';

export default class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            groupList: [
                {
                    id: "index",
                    label: "受信箱"
                },
                {
                    id: "group-1",
                    label: "グループ１"
                },
            ],
            todoList: {
                "index": [
                    {
                        id: "item-1",
                        label:"Todo1",
                        completed: false
                    },
                    {
                        id: "item-2",
                        label:"Todo2",
                        completed: false
                    },
                    {
                        id: "item-3",
                        label:"Todo3",
                        completed: false
                    }   
                ],
                "group-1": [
                    {
                        id: "item-4",
                        label:"Todo4",
                        completed: false
                    },
                    {
                        id: "item-5",
                        label:"Todo5",
                        completed: false
                    },
                    {
                        id: "item-6",
                        label:"Todo6",
                        completed: false
                    }   
                ]
            },
            todoCount: 4,
            groupCount: 1,
            selectedGroup: "index"
        }
    }

    onSelectGroup(id) {
        console.log("onSelectGroup",id);
        this.setState({selectedGroup: id});
    }

    onAddTodo(label){
        let _state=Object.assign({},this.state);
        _state.todoCount++;
        let todoList=_state.todoList[_state.selectedGroup];
        let todoItem= {
            id: "item-"+_state.todoCount,
            label: label,
            completed: false
        }
        todoList.push(todoItem);
        this.setState(_state);
    }

    onCompleteTodo(id){
        let _state=Object.assign({},this.state);
        let todoList=_state.todoList[_state.selectedGroup];
        this.setState(_state);
        for(var i=0;i<todoList.length;i++){
            if(todoList[i].id == id){
                todoList[i].completed = true;
                break;
            }
        }
        this.setState(_state);
    }

    onDeleteTodo(id){
        let _state =Object.assign({},this.state);
        let todoList=_state.todoList[_state.selectedGroup];
        this.setState(_state);
        for(var i=0;i<todoList.length;i++){
            if(todoList[i].id == id){
                todoList.splice(i,1);
                break;
            }
        }
        this.setState(_state);
    }

    onAddGroup(groupName){
        let _state =Object.assign({},this.state);
        let groupID="group-"+_state.groupCount;
        _state.groupCount++;
        let groupItem ={
            id:groupID,
            label: groupName
        }
        _state.groupList.push(groupItem)

        _state.todoList[groupID]=[];
        this.setState(_state);
    }

    render() {
        return (
        <div className="wrap">
            <SideArea groupList={this.state.groupList}
                      onSelect={this.onSelectGroup.bind(this)}
                      onAddGroup={this.onAddGroup.bind(this)}/>
            <MainArea todoList={this.state.todoList[this.state.selectedGroup]}
                      onDeleteTodo={this.onDeleteTodo.bind(this)}
                      onCompleteTodo={this.onCompleteTodo.bind(this)}
                      onAddTodo={this.onAddTodo.bind(this)}
                      />
        </div>
        );
    }
}