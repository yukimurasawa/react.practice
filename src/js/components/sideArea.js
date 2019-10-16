import React from 'react';
import ReactDOM from 'react-dom';
import AddGroupDialog from './addgroupdialog.js';
import EditGroupDialog from './editgroupdialog.js';


export default class SideArea extends React.Component {

    constructor(props) {
        super(props);
        
        this.state= {
            showAddGroupDialog: false,
            showEditGroupDialog: false,
            selectedGroup: undefined
        }

    }

    onClickGroup(event){
        let listItem= ReactDOM.findDOMNode(event.target);
        let id= listItem.dataset.id;
        this.props.onSelect(id);
    }

    onClickAddGroup(event){
        this.setState({showAddGroupDialog: true});
    }

    onSaveAddGroupDialog(groupName){
        this.props.onAddGroup(groupName);

        this.setState({showAddGroupDialog: false});
    }

    onCancelAddGroupDialog(){
        this.setState({showAddGroupDialog: false});
    }

    
    onClickEditGroup(){
        let editButton= ReactDOM.findDOMNode(event.target);
        let id= editButton.dataset.id;
        let selectedGroup;
        for(var i=0;i<this.props.groupList.length;i++){
            if(this.props.groupList[i].id==id){
                selectedGroup= this.props.groupList[i]
                break;
            }
        }
        this.setState({
            selectedGroup: selectedGroup,
            showEditGroupDialog: true,
        });
    }

    onSaveEditGroupDialog(groupName){
        this.setState({showEditGroupDialog: false});
    }

    onCancelEditGroupDialog() {
        this.setState({showEditGroupDialog: false});
    }

    onDeleteGroupDialog(){
        this.setState({showEditGroupDialog: false});
    }
    
    renderGroup() {
        let groupListDom = [];
        for(var i=0 ;i<this.props.groupList.length;i++){
            let group = this.props.groupList[i];
            let groupItem = (<li className="groupList" key ={group.id}>
                                <span 
                                data-id={group.id}
                                onClick={this.onClickGroup.bind(this)}>{group.label}</span>
                                <button
                                    data-id={group.id}
                                    onClick={this.onClickEditGroup.bind(this)}>Edit
                                </button>
                                </li>)
            groupListDom.push(groupItem);
        }
        return groupListDom;
    }

    render() {
        return(
            <div className="side-area">
                <ul>
                    {this.renderGroup()}
                </ul>
                <div className="side-area-footer">
                    <button class="add-group-button" onClick={this.onClickAddGroup.bind(this)}>New Group</button>
                </div>
                <AddGroupDialog 
                    show={this.state.showAddGroupDialog} 
                    onSave={this.onSaveAddGroupDialog.bind(this)} 
                    onCancel={this.onCancelAddGroupDialog.bind(this)}
                    />
                <EditGroupDialog 
                    show={this.state.showEditGroupDialog} 
                    group={this.state.selectedGroup}
                    onSave={this.onSaveEditGroupDialog.bind(this)} 
                    onCancel={this.onCancelEditGroupDialog.bind(this)}
                    onDelete={this.onDeleteGroupDialog.bind(this)}
                    />
            </div>
        );
    }
}
