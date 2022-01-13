import React from 'react'
import { Route, Redirect } from "react-router-dom";


const NotUserRoute = ({...rest}) => {

    const isLogged=localStorage.getItem('token')

    if(isLogged===null){
      return(
        <Route
          {...rest}
        />
      )
    }else{
      return(
        <Redirect to="/"/>
      )
    }
  }


  export default NotUserRoute