import React from "react";
import { connect } from "react-redux";
import SingleFavourites from "../components/SingleFavourites";


const mapStateToProps = (state) => ({
  favourites: state.favourites,
});

function Favourites({favourites}) {
  return favourites.length > 0 ? (
    <div>
        {favourites.map((job) => (
            <SingleFavourites key={job._id} job={job} />
        ))}
    </div>
  ) : (
    <div>
      <h1>No Favourites</h1>
    </div>
  );
}

export default connect(mapStateToProps)(Favourites);