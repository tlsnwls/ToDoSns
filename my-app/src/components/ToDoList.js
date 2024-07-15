import React from "react";
import styled from "styled-components";
import ListItem from "./ToDoListItem";

const ListNav = styled.div`
    max-height: 800px; /* Adjust height as needed */
    overflow-y: auto; /* Enable vertical scrolling */
    scrollbar-width: none; /* Hide scrollbar in Firefox */
    -ms-overflow-style: none; /* Hide scrollbar in IE and Edge */
    -webkit-overflow-scrolling: touch; /* Enable smooth scrolling on touch devices */

    &::-webkit-scrollbar {
        display: none; /* Hide scrollbar in Chrome, Safari, and Opera */
    }

    @media (max-height: 70vh) {
        max-height: 70vh; /* Set max height to 70% of viewport height */
    }
`;

const List = styled.ul`
    padding: 0;
    list-style: none;
    margin: 0;
`;

const ToDoList = ({ todos, onRemove, onToggle }) => {
    return (
        <ListNav>
            <List>
                {todos.map((todo, index) => (
                    <ListItem
                        key={todo.id}
                        todo={todo}
                        onRemove={onRemove}
                        onToggle={onToggle}
                        index={index}
                    />
                ))}
            </List>
        </ListNav>
    );
};

export default ToDoList;