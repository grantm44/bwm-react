import React from 'react';
import { connect } from 'react-redux';
import {fetchRentalById} from 'actions';

class RentalDetail extends React.Component {
    
    componentWillMount(){
        const rentalId = this.props.match.params.id;
        console.log(rentalId);
        this.props.fetchRentalById(rentalId);
    }
 
    render(){
        const rental = this.props.rental
        return (
            <div>
                <h1> {rental.title} </h1>
            </div>
        )
    }

    
}

function mapStateToProps(state){
    return {
        rental: state.rental.data
    }
}

export default connect(mapStateToProps, {fetchRentalById})(RentalDetail);