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
                selectedGroup: "group-1"
        }
    }

    onSelectGroup(id) {
        console.log("onSelectGroup",id);
        this.setState({selectedGroup: id});
    }

    render() {
        return (
        <div className="wrap">
            <SideArea groupList={this.state.groupList}
                      onSelect={this.onSelectGroup.bind(this)}/>
            <MainArea todoList={this.state.todoList[this.state.selectedGroup]}/>
        </div>
        );
    }
}