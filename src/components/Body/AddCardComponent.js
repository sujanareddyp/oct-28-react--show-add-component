import React from 'react';
import {connect} from 'react-redux';
import {addNewCard} from '../../Actions/Action';
class AddCardComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInput: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            ...this.state,
            userInput: e.target.value
        })
    }
    close = () => {
        this.props.toggleAddComponent();
    }
    save = () => {
        this.props.dispatch(addNewCard(this.state.userInput, this.props.title));
        this.setState({
            ...this.state,
            userInput: ""
        })
        this.props.toggleAddComponent();
    }
    render() {
        return(
            <div>
                <textarea value={this.state.userInput} onChange={this.handleChange}/>
                <div style={{display: 'flex'}}>
                    <button onClick={this.save}>Add List</button>
                    <p  style={{margin: '0', fontSize: '14px',textAlign:'center'}}  onClick={this.close}>X</p>
                </div>
            </div>
        );
    }
}

export default connect()(AddCardComponent);