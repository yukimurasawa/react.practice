import React from 'react';
import ReactDOM from 'react-dom';
import GropuDialog from './groupdialog.js';


export default class SideArea extends React.Component {

    constructor(props) {
        super(props);

    }

    onClickGroup(event){
        let listItem= ReactDOM.findDOMNode(event.target);
        let id= listItem.dataset.id;
        this.props.onSelect(id);
    }

    onSaveAddGroupDialog(groupName){
        this.props.onAddGroup(groupName);
    }
    
    renderGroup() {
        let groupListDom = [];
        for(var i=0 ;i<this.props.groupList.length;i++){
            let group = this.props.groupList[i];
            let groupItem = (<li className="groupList" key ={group.id}
                                data-id={group.id}
                                onClick={this.onClickGroup.bind(this)}>{group.label}</li>)
            groupListDom.push(groupItem);
        }
        return groupListDom;
    }

    render() {
        return(
            <div className="side-area">
                <GropuDialog onSave={this.onSaveAddGroupDialog.bind(this)}/>
                <ul>
                    {this.renderGroup()}
                </ul>
            </div>
        );
    }
}
