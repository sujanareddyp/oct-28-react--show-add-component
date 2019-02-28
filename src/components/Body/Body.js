import React from 'react';
import {connect} from 'react-redux';
import ListContainer from './ListContainer';
import AddNewList from './AddNewList';
class Body extends React.Component{
    render() {
        const listContainer = [];
        for(let list in this.props.rawData){
            listContainer.push(<ListContainer key={list} title={list} listOfCards={this.props.rawData[list]}/>)
        }
        return(
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                {listContainer}
                <AddNewList />
            </div>
        );
    }
}
const mapStateToProps = (store) => {
    return {rawData: store.trelloReducer}
}
export default connect(mapStateToProps)(Body);