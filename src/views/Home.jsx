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

import { connect } from "react-redux";
import { STOP_LOADING, SET_SEARCH } from "../redux/actions/actions";

const mapStateToProps = (state) => {
  return {
    home: state.home,
  };
};

const mapDispatchToProps = (dispatch) => ({
  stopLoading: (bool) => {
    dispatch({
      type: STOP_LOADING,
      payload: bool
    });
  },
  setSearch: (value) => {
    dispatch({
      type: SET_SEARCH,
      payload: value,
    });
  },
});

const Home = (props) => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    props.stopLoading(true);
    const response = await fetch(
      `https://strive-jobs-api.herokuapp.com/jobs?search=${props.home.search}&limit=10`
    );
    if (response.ok) {
      const data = await response.json();
      setJobs(data.data);
      props.stopLoading(false);
    }
  };

  useEffect(() => {
    if (props.home.search !== "") {
      fetchJobs();
    }
  }, [props.home.search]);

  return (
    <Container>
      <Row>
        <div className="d-flex w-100 mt-5 flex-column">
          <FormControl
            type="text"
            placeholder="Search job offers"
            value={props.home.search}
            className="mr-sm-2"
            onChange={(e) => props.setSearch(e.target.value.toLowerCase())}
          />
          {props.home.isLoading === true ? (
            <div className="w-100 mt-5">
              <div className="d-flex align-items-center justify-content-center w-100">
                <SpinnerB />
              </div>
            </div>
          ) : (
            props.home.search !== "" && 
            <div className="d-flex flex-column">
              <ListGroup>
                {jobs.map((job) => {
                  return <SingleJob job={job} />;
                })}
              </ListGroup>
            </div>
          )}
          <Button variant="outline-success" onClick={fetchJobs}>
            Search
          </Button>
        </div>
      </Row>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);