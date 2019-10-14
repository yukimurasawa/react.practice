import React from 'react';

export default class GropuDialog extends React.Component{
    render(){
        return(
            <div className="modal-layer">
                <div classaName="dialog">
                    <div className="dialog-header">New Group</div>
                    <div className="dialog-content">
                        GroupName:
                        <input type="text"
                               name="groupName"
                               className="group-text-input">
                        </input>
                    </div>
                    <div className="dialog-footer">
                        <button className="cancel-button">Cancel</button>
                        <button className="save-button">Save</button>
                    </div>
                </div>
            </div>
        )
    }
}