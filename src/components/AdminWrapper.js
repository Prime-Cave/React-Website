import React from 'react';
import "./assets/css/admin.css"

class AdminWrapper extends React.Component{
    render(){
        return(
            <div id= "admin-page">
                {this.props.children}
            </div>
        )
    }
}

export default AdminWrapper;
