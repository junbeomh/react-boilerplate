import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import axios from 'axios';

import styled from 'styled-components';
import StudentCard from './StudentCard';
import Searchbox from './Searchbox';

const CardListContainer = styled.div`
    ${({ theme }) => theme.mixins.flexColumn};
    ${({ theme }) => theme.mixins.boxShadow};
    ${({ theme }) => theme.mixins.list};

    height: 80%;
    width: 50%;
    background-color: var(--colorLight);
`

const CardList = styled.ul`
    width: 100%;
    overflow-y: auto;
`

const StudentCardList = ({ ai, students, studentsFiltered }) => {
    const dispatch = useDispatch();
    const [nameInput, setNameInput] = useState('');
    const [tagInput, setTagInput] = useState('');


    //refactor to actions
    const fetchData = async () => {
        try {
            axios
                .get("https://www.hatchways.io/api/assessment/students")
                .then(response => {

                    dispatch({
                        payload: response.data.students,
                        type: "UPDATE_STUDENT",
                    });
                })

        } catch (err) {
            throw new Error(err);
        }
    }

    const handleNameFilter = (e) => {
        setNameInput(e.target.value);

        //refactor to actions
        dispatch({
            payload: e.target.value,
            type: "UPDATE_NAME_FILTER",
        });
        // call filter redux action
    }

    const handleTagFilter = (e) => {
        setTagInput(e.target.value);

        //refactor to actions
        dispatch({
            payload: e.target.value,
            type: "UPDATE_TAG_FILTER",
        });
        // call filter redux action
    }


    useEffect(() => {
        fetchData();
    }, [students.length])

    return (
        <>
            <CardListContainer className="cardlist-container" data-testid="test-student-card-list">
                <input
                    type="text"
                    placeholder="Search by name"
                    value={nameInput}
                    onChange={e => handleNameFilter(e)}
                />
                <input
                    type="text"
                    placeholder="Search by tag"
                    value={tagInput}
                    onChange={e => handleTagFilter(e)}
                />
                <CardList>
                    {console.log(students)}
                    {students &&
                        students.map(student => {
                            return (
                                <StudentCard
                                    key={student.id}
                                    data={student}
                                />
                            );
                        })}
                </CardList>
            </CardListContainer>
        </>
    )
}

const mapStateTopProps = state => (
    {
        students: state.students,
        studentsFiltered: state.studentsFiltered

    }
)

export default connect(mapStateTopProps)(StudentCardList);
