import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';



class TableView extends React.Component{
    render(){
            const {rows, columns } = this.props;
        return (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  {columns
                    ? columns.map((col, i) => {
                        return <TableCell key={i}>{col}</TableCell>;
                      })
                    : null}
                </TableRow>
              </TableHead>

              <TableBody>
                {rows
                  ? rows.map((row, i) => {
                      return columns.map((col, colIndex) => {
                        return <TableCell>{row[col.name]}</TableCell>;
                      });
                    })
                  : null}
              </TableBody>
            </Table>
          </TableContainer>
        );
    }
}

export default TableView;