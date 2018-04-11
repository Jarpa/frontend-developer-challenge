import React from "react";

//Material-ui
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";

export default props => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Description</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      {props.data.map(repo => (
        <TableRow key={repo.id}>
          <TableRowColumn>{repo.id}</TableRowColumn>
          <TableRowColumn>{repo.name}</TableRowColumn>
          <TableRowColumn>{repo.description}</TableRowColumn>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);
