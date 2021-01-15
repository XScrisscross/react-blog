import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

function BlogPost() {
  let { slug } = useParams();
  console.log(1);
  return <div>Now showing post {slug}</div>;
}

export default function App() {
  return (
    <BrowserRouter basename="/calendar">
      <Link to="/today"/> 
      <Link to="/tomorrow"/> 
    </BrowserRouter>
  )
}

function HomePage (){
  return (
    <div>HomePage</div>
  )
}