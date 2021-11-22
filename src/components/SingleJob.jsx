import React from "react";
import { ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router";


export default function SingleJob(props) {

  const navigate = useNavigate()

  return (
  <ListGroup.Item onClick={() => navigate(`/company/${props.job.company_name}`)}>{props.job.title + " " + props.job.company_name}</ListGroup.Item>
  )
}