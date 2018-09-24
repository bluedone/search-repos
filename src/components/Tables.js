import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { withStyles } from '@material-ui/core/styles';

class SearchedRepoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedRows: this.props.rows,
      favoritesRows:[],
    };
  }

  UNSAFE_componentWillReceiveProps(rows) {
    this.setState({ searchedRows: this.props.rows });

  }

  // add favourites
  handleAddClick(row,cell){
    var allFavs= this.state.favoritesRows;
    allFavs.push(row);

    this.setState({favoritesRows: allFavs});
    this.forceUpdate();
  }

  //remove favourites
   handleRemoveClick(row){
    var allFavs= this.state.favoritesRows;

    for (var i = 0; i< allFavs.length; i++){
        if (row.id === allFavs[i].id){
          allFavs.splice(i, 1);
        }
    }
    this.setState({favoritesRows: allFavs});
    this.forceUpdate();
  }
 
render(){
  console.log(this.state.favoritesRows);
    return (
      <div>
      <section className="container">
      <div className="left-half">
      <Paper >
        <Table >
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell numeric>Language </TableCell>
              <TableCell numeric>Latest Tag</TableCell>
              <TableCell numeric></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.searchedRows.map(row => {
              return (
                
                <TableRow key={row.id}>
                  <TableCell><a href={row.url}><u>{row.name}</u></a></TableCell>
                  <TableCell numeric>{row.language}</TableCell>
                  <TableCell numeric>{row.version}</TableCell>
                  <TableCell numeric onClick={() => this.handleAddClick(row)}><u>add</u></TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
      </div>
      <div className="right-half">
           
      <Paper >
      <Table >
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell numeric>Language </TableCell>
              <TableCell numeric>Latest Tag</TableCell>
              <TableCell numeric></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.favoritesRows.map(row => {
              return (
                
                <TableRow key={row.id}>
                  <TableCell><a href={row.url}><u>{row.name}</u></a></TableCell>
                  <TableCell numeric>{row.language}</TableCell>
                  <TableCell numeric>{row.version}</TableCell>
                  <TableCell numeric onClick={() => this.handleRemoveClick(row)}><u>remove</u></TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
      </div>
        
      </section>
      </div>
     
    );
  }
}

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

export default withStyles(styles)(SearchedRepoList);
