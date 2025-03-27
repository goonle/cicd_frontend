import React, {useEffect, useState} from 'react';
// import NoteList from "../component/NoteList";
import {Button, Container, Navbar} from "react-bootstrap";
import LogoutBtn from "../components/LogoutBtn";

const NoteListPage = () => {

    return (
        <Container>
            <Navbar className="d-flex justify-content-between mt-3">
                <h2>My Notes</h2>
                <LogoutBtn/>
            </Navbar>
            {/*<NoteList/>*/}
        </Container>
    );
};

export default NoteListPage;
