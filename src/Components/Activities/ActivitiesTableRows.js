import React, { useEffect } from "react";
import { TableRow, TableCell, IconButton } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { formatDate } from "../../Utils/formatters";
import "../../Styles/Table.css";
import * as activitiesActions from "../../app/activitiesReducer/activitiesReducer"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { showSuccessAlert } from "../../Utils/alerts";

const ActivitiesTableRows = ({loadingValue}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onEdit = (id) => {
    dispatch(activitiesActions.getById(id)).then(() => {
      history.push(`/activity-detail/${id}`);
    });
  };
  const onDelete = (id) => {
    dispatch(activitiesActions.deleteById(id));
    showSuccessAlert("Actividad eliminada");
}

  const activities = useSelector((state) => state.activities.activities);
  const isLoading = useSelector((state) => state.news.loading);

  useEffect(() => {
    dispatch(activitiesActions.getAll());
}, []);

  useEffect(()=>{
    if(loadingValue){
        !isLoading && loadingValue(false);
      }
    },[isLoading])

  return (
    <>
      {
      activities &&
         activities.map((element) => (
        <TableRow key={element.id}>
          <TableCell component="th" scope="row">
            {element.name}
          </TableCell>
          <TableCell align="center">
            <img
              className="table-row-image"
              src={element.image}
              alt={element.name}
            />
          </TableCell>
          <TableCell align="center">{formatDate(new Date())}</TableCell>
          <TableCell align="center">
            <IconButton onClick={() => onEdit(element.id)}>
              <Edit />
            </IconButton>
            <IconButton
              onClick={() => {
                onDelete(element.id);
              }}
            >
              <Delete />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default ActivitiesTableRows