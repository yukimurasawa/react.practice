import React from 'react';


export default class SideArea extends React.Component {

    constructor(props) {
        super(props);

    }

    onClickGroup(id){
        this.props.onSelect(id);
    }
    
    renderGroup() {
        let groupListDom = [];
        for(var i=0 ;i<this.props.groupList.length;i++){
            let group = this.props.groupList[i];
            let groupItem = (<li className="groupList" key ={group.id}
                                onClick={()=>{this.onClickGroup(group.id)}}>{group.label}</li>)
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
            </div>
        );
    }
}
