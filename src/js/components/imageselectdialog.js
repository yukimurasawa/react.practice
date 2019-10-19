import React from 'react';


export default class ImageSelectDialog extends React.Component{
    constructor(props){
        super(props);

        this.state= {
            images:[
                "./backgroundimage/image0.jpg",
                "./backgroundimage/image1.jpg",
                "./backgroundimage/image2.jpg",
                "./backgroundimage/image3.jpg",
                "./backgroundimage/image4.jpg",
                "./backgroundimage/image5.jpg",
                "./backgroundimage/image6.jpg",
                "./backgroundimage/image7.jpg",
                "./backgroundimage/image8.jpg",
                "./backgroundimage/image9.jpg",
                "./backgroundimage/image10.jpg",
                "./backgroundimage/image11.jpg",
                "./backgroundimage/image12.jpg",
                "./backgroundimage/image13.jpg",
                "./backgroundimage/image14.jpg",
                "./backgroundimage/image15.jpg",
                "./backgroundimage/image16.jpg",
                "./backgroundimage/image17.jpg",
                "./backgroundimage/image19.jpg",
                "./backgroundimage/image21.jpg",
                "./backgroundimage/image22.jpg",
                "./backgroundimage/image23.jpg",
                "./backgroundimage/image24.jpg",
                "./backgroundimage/image25.jpg"
            ],
            showAddGroupDialog: false
        }
    }

    onCancel(event){
        this.props.onCancel();
    }
    
    
    render(){
        if(this.props.show){

        return(
            <div className="image-layer">
                <div className="image-dialog">
                    <div className="image-dialog-header">Backgroundimages</div>
                    <div className="image-dialog-content">
                        <ul className="images-list">
                            <li><img src={this.state.images[0]}></img></li>
                            <li><img src={this.state.images[1]}></img></li>
                            <li><img src={this.state.images[2]}></img></li>
                            <li><img src={this.state.images[3]}></img></li>
                            <li><img src={this.state.images[4]}></img></li>
                            <li><img src={this.state.images[5]}></img></li>
                            <li><img src={this.state.images[6]}></img></li>
                            <li><img src={this.state.images[7]}></img></li>
                            <li><img src={this.state.images[8]}></img></li>
                            <li><img src={this.state.images[9]}></img></li>
                            <li><img src={this.state.images[10]}></img></li>
                            <li><img src={this.state.images[11]}></img></li>
                            <li><img src={this.state.images[12]}></img></li>
                            <li><img src={this.state.images[13]}></img></li>
                            <li><img src={this.state.images[14]}></img></li>
                            <li><img src={this.state.images[15]}></img></li>
                            <li><img src={this.state.images[16]}></img></li>
                            <li><img src={this.state.images[17]}></img></li>
                            <li><img src={this.state.images[18]}></img></li>
                            <li><img src={this.state.images[19]}></img></li>
                            <li><img src={this.state.images[20]}></img></li>
                            <li><img src={this.state.images[21]}></img></li>
                        </ul>
                    </div>
                    <div className="image-dialog-footer">
                        <button className="cancel-buttton" onClick={this.onCancel.bind(this)}>Cancel</button>
                    </div>
                </div>
            </div>
        )
        }else{
            return(<div></div>);
        }
    }
}