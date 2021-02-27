import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";


export default function OrgProfile(props){
    console.log(props)
    return(
        <div>
            <div onClick = {props.schedule}></div>
        </div>
    )
}