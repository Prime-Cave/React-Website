import React from 'react';
import {withRouter} from 'react-router-dom';
import{connect} from 'react-redux'

class Dashboard extends React.Component{
    render(){
        return(
            <h1>You are Logged in with token: {this.props.token}</h1>
        )
    }
} 


const mapStateToProps = state =>{
    return {
        auth : state.auth
    }
}

const mapDispatchToProps = dispatch =>{
    return{

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Dashboard));