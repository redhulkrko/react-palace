import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
        <h4>{props.obj.title}</h4>
        <p><Link className="edit-link" to={"/admin/movies/edit/" + props.obj._id}>
                        Edit
                    </Link></p>
        <p><Link className="edit-link" onClick={deleteMovie}>
            Delete
        </Link></p>
        </>
    );
};

export default ListRow