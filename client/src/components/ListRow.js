import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

import axios from 'axios';

const ListItem = styled.li`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: 150px 1fr;
  align-items: center;
  padding: 1.5em 1em;
  border-bottom: 1px solid lightgrey;

  :last-child {
      border-bottom: none;
  }
`;

const ListImg = styled.img`
display: block;
max-width: 100%;
height: auto;
`;

const ListRow = props => {

    const deleteMovie = () => {
        axios.delete('http://localhost:5000/api/movies/delete/' + props.obj._id)
            .then((res) => {
                console.log('Movie successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }
    return (
        <>
        <ListItem>
            <ListImg src={"http://localhost/media/" + props.obj.slide}/>
            <div>
            <h4>{props.obj.Title}</h4>
            <p><Link className="edit-link" to={"/admin/movies/edit/" + props.obj._id}>
                            Edit
                        </Link></p>
            <p><Link className="edit-link" onClick={deleteMovie}>
                Delete
            </Link></p>
            </div>
        </ListItem>
        </>
    );
};

export default ListRow