import React, { useContext } from "react";
import context from "./apiContext";
import styled from 'styled-components';

const Section = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #82bef6;
    -webkit-column-break-inside: avoid;
    padding: 14px;
    box-sizing: border-box;
    grid-column: 2/4;
    grid-row: 6/9;
`;

const Content = styled.div``;

const SectionHead = styled.h4`
    color: #8f9090;
    font-style: italic;
    font-size: 14px;
    line-height: 20px;
`;

const Title = styled.h5`
    margin-left: 10px;
`;

const ListItem = styled.li`
    list-style: none;
    font-size: .7em;
`;

function Updates() {
    const { posts } = useContext(context);
    
    const updates = posts.sort(
        (a, b) => Date.parse(a.OpeningDate) - Date.parse(b.OpeningDate)
      );
    return(
    <>
     <Section>
        <SectionHead>Updates</SectionHead>

        <Content>
            <ul>
            {updates.map((post, i) => (
                <ListItem key={i}>
                  {post.Title}{" "}
                  - {(new Date(post.OpeningDate)).toLocaleDateString('en', {  day: '2-digit', month: 'short' })}
                </ListItem>
              ))}
            </ul>
        </Content>
     </Section>
    </>
    )
};

export default Updates;
      