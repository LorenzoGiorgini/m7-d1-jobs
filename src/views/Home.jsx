import React, { useEffect, useState } from "react";
import {
  Container,
  FormControl,
  ListGroup,
  Row,
  Button,
} from "react-bootstrap";

import SingleJob from "../components/SingleJob";
import SpinnerB from "../components/SpinnerB";

export default function Home() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    setLoading(true);
    const response = await fetch(
      `https://strive-jobs-api.herokuapp.com/jobs?search=${search}&limit=10`
    );
    if (response.ok) {
      const data = await response.json();
      setJobs(data.data);
      setLoading(false);
    }
  };


  useEffect(() => {
    if(search !== "") {
      fetchJobs();
    }
  }, [search])

  return (
    <Container>
      <Row>
        <div className="d-flex w-100 mt-5">
          <FormControl
            type="text"
            placeholder="Search job offers"
            value={search}
            className="mr-sm-2"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
          <Button variant="outline-success" onClick={fetchJobs}>
            Search
          </Button>
        </div>

        {loading === true ? (
            <div className="w-100 mt-5">
              <div className="d-flex align-items-center justify-content-center w-100">
                <SpinnerB />
              </div>
            </div>
        ) : (
          <div className="d-flex flex-column">
            <ListGroup>
              {jobs.map((job) => {
                return <SingleJob job={job} />;
              })}
            </ListGroup>
          </div>
        )}
      </Row>
    </Container>
  );
}
