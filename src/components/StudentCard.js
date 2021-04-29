import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CardContainer = styled.li`
    ${({ theme }) => theme.mixins.flexRow};
    border-bottom: 1px solid var(--colorSecondary);
    min-height: 200px;
`
const AvatarContainer = styled.div`
    ${({ theme }) => theme.mixins.flexCenter};
    width: 22%;
    height: 200px;

    img {
        border-radius: 50%;
        border: 1px solid var(--colorSecondary);
        width: 120px;
        height: 60%;
    }
`
const InfoContainer = styled.div`
    ${({ theme }) => theme.mixins.flexColumn};
    width: 75%;

    .header {
        font-size: 40px;
        font-weight:bold;
        padding-block-start: 15px;
        padding-block-end: 15px;
        text-transform: uppercase;
    }

    .subheader {
        margin-left: 20px;
        font-size: 18px;
    }

    .more-info {
        font-size: 18px;
        margin: 20px;
    }
`
const ButtonContainer = styled.div`
    margin-top: 20px;
    margin-right: 25px;
    font-size: 30px;
    font-weight:bold;

`

const StudentCard = (props) => {
    const { id, city, company, email, firstName, lastName, pic, skill, grades } = props.data;
    const [average, setAverage] = useState(0);
    const [showGrades, setShowGrades] = useState(false);

    const getAverage = (grades) => {
        let avgGrade = 0;
        grades.map((grade) => { avgGrade += parseInt(grade); })
        avgGrade /=  grades.length;
        setAverage(Math.ceil(100 * avgGrade) / 100);
    }

    const toggleMoreInfo = () => { setShowGrades(!showGrades); }

    useEffect(() => {
        getAverage(grades);
    }, [grades.length])


    // implement add tag redux action

    return (
        <>
            <CardContainer className="card-container">
                <AvatarContainer className="card-avatar">
                    <img src={pic} />
                </AvatarContainer>
                <InfoContainer className="card-info">
                    <span className="header">{firstName + " " + lastName}</span>
                    <span className="subheader">{`Email: ${email}`}</span>
                    <span className="subheader">{`Company: ${company}`}</span>
                    <span className="subheader">{`Skill: ${skill}`}</span>
                    <span className="subheader">{`Average: ${average}%`}</span>
                    {showGrades && (
                        <div className="more-info">
                            {grades.map((grade, index) => {
                                return (
                                    <div key={index.toString()}>
                                        {`Test ${index + 1}:\xa0\xa0\xa0\xa0\xa0\xa0 ${grade}%`}
                                    </div>
                                );
                            })}
                            <div>
                                { }
                            </div>
                            {/* add onChange & value */}
                            <input
                                type="text"
                                placeholder="Enter tag name"
                            />
                        </div>
                    )}
                </InfoContainer>
                <ButtonContainer>
                    {showGrades ? (
                        <button onClick={toggleMoreInfo}> - </button>
                    ) : (
                        <button onClick={toggleMoreInfo}> + </button>
                    )}
                </ButtonContainer>
            </CardContainer>
        </>
    )
}

export default StudentCard;