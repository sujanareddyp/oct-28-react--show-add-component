import React from 'react';
import AddComponent from './AddComponent';
class AddNewList extends React.Component{
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
            <AddComponent toggleAddComponent={this.toggleAddComponent}/> :
            <p onClick={this.toggleAddComponent} style={{textAlign:'center',background: '#000', color: '#fff', fontSize: '14px', cursor: 'pointer'}}>Add List</p>
            }
        </div>);
    }
}

export default AddNewList;