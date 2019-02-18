import React from "react";
import Like from "./common/like";

const MoviesTable = props => {
  const { movies, onDelete, onLike } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th onCkick={() => onSort("title")}>Title</th>
          <th onCkick={() => onSort("genre.name")}>Genre</th>
          <th onCkick={() => onSort("numberInStock")}>Stock</th>
          <th onCkick={() => onSort("dailyRent")}>Rate</th>
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        {movies.map(movie => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like liked={movie.liked} onClick={() => onLike(movie)} />
            </td>
            <td>
              <button
                onClick={() => {
                  onDelete(movie);
                }}
                className="btn btn-lg btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
