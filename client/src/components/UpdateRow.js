import React from 'react';
import styled from "styled-components";

const ListItem = styled.li`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: 1fr;
  align-items: center;
  padding: 1.5em 1em;
`;

const UpdateRow = props => {

    return (
        <>
        <ListItem>
            <div>
            <h4>{props.obj.Title}</h4>
            {(new Date(props.obj.Updated)).toLocaleDateString('en', {  day: '2-digit', month: 'short' })}
            </div>
        </ListItem>
        </>
    );
};

export default UpdateRow