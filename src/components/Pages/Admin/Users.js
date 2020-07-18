import React from "react";
import TableView from '../../Common/TableView'

const columns = [
  {label:'ID', name:'id'},
  {label: 'Email', name:'email'},
  {label: 'Name', name:'name'}
]

class Users extends React.Component {
  render() {
    return (
        <div>
          <h1>Users Page</h1>
          <TableView 
            columns={[columns]}
            rows={[]}
          />
        </div>
    ) 
  }
}

export default Users;
