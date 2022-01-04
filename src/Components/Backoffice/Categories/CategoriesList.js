import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import TableEditable from "../../common/EditableTable";
import { NewsTableRows } from "../../News/NewsTableRows";
import * as services from "../../../Services/categoriesServices";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Button,
  TableRow,
} from "@mui/material";
import "../../../Styles/TableStyle.css";
import "../../../Styles/Table.css";
import TitleBackoffice from "../TitleBackoffice";

const CategoriesList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    services.getCategories().then((data) => setList(data));
  }, []);

  const history = useHistory();

  const handleEditClick = (id) => {
    history.push(`/backoffice/categories/edit/${id}`);
  };

  const handleDeleteClick = (idCategory) => {
    //DELETE API SERVICE
    services.removeCategory(idCategory);
    //DELETE (FILTER) CATEGORY TO INSTALY UPDATE THE STATE
    let result = list.filter((category) => category.id != idCategory);

    setList(result);
  };

  return (
    <>
      <TitleBackoffice title={"Edición de Categorías"} />
      <TableContainer className="TableContainer">
        <Table className="TableFinal">
          <TableHead className="TableRowModify">
            <TableRow>
              <TableCell align="center" className="TableCell">
                Name
              </TableCell>
              <TableCell align="center" className="TableCell">
                Created At
              </TableCell>
              <TableCell align="center" className="TableCell">
                <Button
                  color="buttoncreatenews"
                  variant="contained"
                  size="small"
                  component={Link}
                  to="/backoffice/categories/create"
                >
                  Create Category
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list?.map((category) => (
              <TableEditable
                element={category}
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default CategoriesList;
