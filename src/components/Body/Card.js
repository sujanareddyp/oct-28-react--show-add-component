import React from 'react';
import {connect} from 'react-redux';
import {delNewCard} from '../../Actions/Action';
class Card extends React.Component{
    delete = () => {
        this.props.dispatch(delNewCard(this.props.index, this.props.title))
    }
    render(){
        return(
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '2px 5px'}}>
                <p style={{fontSize: '12px'}}>{this.props.value}</p>
                <p style={{fontSize: '12px'}} onClick={this.delete}>X</p>
            </div>
        );
    }
}

export default connect()(Card);