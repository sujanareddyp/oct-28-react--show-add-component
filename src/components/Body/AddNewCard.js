import React from 'react';
import AddCardComponent from './AddCardComponent';
class AddNewCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showAddComponent: false
        }
    }
    toggleAddComponent = () => {
        this.setState({
            ...this.state,
            showAddComponent: !this.state.showAddComponent
        })
    } 
    render(){
        return(<div>
            {this.state.showAddComponent ? 
            <AddCardComponent title={this.props.title} toggleAddComponent={this.toggleAddComponent}/> :
            <p onClick={this.toggleAddComponent} style={{background: '#000', color: '#fff', fontSize: '14px', cursor: 'pointer'}}>Add Card</p>
            }
        </div>);
    }
}

export default AddNewCard;