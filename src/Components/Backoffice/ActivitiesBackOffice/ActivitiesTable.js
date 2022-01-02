import React from "react";
import { Link } from "react-router-dom";
import "../../../Styles/TableStyle.css";
import ActivitiesTableRows from "../../Activities/ActivitiesTableRows";
import {Table,TableBody,TableCell,TableContainer,TableHead,Button,TableRow} from "@mui/material";
import TitleBackoffice from '../TitleBackoffice'
const ActivitiesTable = () => {
  return (
    <>
     <TitleBackoffice title={"Edición de Actividades"} />
      <TableContainer className="TableContainer">
      <Table className="TableFinal">
        <TableHead className="TableRowModify">
          <TableRow>
            <TableCell className="TableCell"align="center">Name</TableCell>
            <TableCell className="TableCell"align="center">Image</TableCell>
            <TableCell className="TableCell"align="center">CreatedAt</TableCell>
            <TableCell align="center" className="TableCell">
                  <Button
                    color="buttoncreatenews"
                    variant="contained"
                    size="small"
                    component={Link}
                    to="/backoffice/activities/create"
                  >
                    Create Activity
                  </Button>
                </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <ActivitiesTableRows></ActivitiesTableRows>
        </TableBody>
      </Table>
      </TableContainer>
    </>
  );
};

export default ActivitiesTable;
