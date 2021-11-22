import React, { useState } from "react";
import {
  Container,
  FormControl,
  ListGroup,
  Row,
  Button,
} from "react-bootstrap";

import SingleJob from "../components/SingleJob"

export default function Home() {

  const [search, setSearch] = useState("");
  const [jobs , setJobs] = useState([])

  const fetchJobs = async () => {
    const response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?search=${search}&limit=10`);
    if(response.ok) {
      const data = await response.json();
      setJobs(data.data);
    }
  }


  return (
    <Container>
      <Row>
        <div className="d-flex w-100 mt-5">
          <FormControl type="text" placeholder="Search job offers" className="mr-sm-2" onChange={(e) => setSearch(e.target.value.toLowerCase())}/>
          <Button variant="outline-success" onClick={fetchJobs}>Search</Button>
        </div>

        {jobs.length > 0 ? (
          <div className="d-flex flex-column">
            <ListGroup>
              {jobs.map((job) => {
                return <SingleJob job={job} />
              })}
            </ListGroup>
          </div>
        ) : (
          <div>
            No jobs found try to search something
          </div>
        )}
      </Row>
    </Container>
  )
}