import React from 'react';

export default class EditGrouppDialog extends React.Component{
    
    onSave(event){
        this.props.onSave();
    }

    onCancel(event){
        this.props.onCancel();
    }

    onDelete(){
        this.props.onDelete();
    }
    
    
    render(){
        if(this.props.show){

        return(
            <div className="modal-layer">
                <div className="dialog">
                    <div className="dialog-header">Edit Group</div>
                    <div className="dialog-content">
                        GroupName：
                        <input type="text"
                               ref="groupName"
                               name="groupName"
                               className="group-text-input">
                        </input>
                    </div>
                    <div className="dialog-footer">
                        <button className="cancel-button" onClick={this.onCancel.bind(this)}>Cancel</button>
                        <button className="save-button" onClick={this.onSave.bind(this)}>Save</button>
                        <button className="save-button" onClick={this.onDelete.bind(this)}>Delete</button>
                    </div>
                </div>
            </div>
        )
        }else{
            return(<div></div>);
        }
    }
}