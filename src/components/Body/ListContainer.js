import React from 'react';
import Card from './Card';
import AddNewCard from './AddNewCard';

class ListContainer extends React.Component{
    render(){
        const cardList = this.props.listOfCards.map((e,i) => {
            return (<Card key={i} index={i} title={this.props.title} value={e} />);
        })
        return(
            <div style={{background: '#fff', width: '20%', marginBottom: '20px'}}>
                <h2 style={{margin: '0', fontSize: '14px'}}>{this.props.title}</h2>
                {cardList}
                <AddNewCard title={this.props.title}/>
             </div>
        );
    }
}

export default ListContainer;