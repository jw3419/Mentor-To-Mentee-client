import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';


//styled Component
const CardItem = styled.div`
margin: 15px;
width: 300px;
height: 180px;
background-color: lightblue;
border-radius: 15px;
font-size: 12px;

.mentor-profile {
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;
}

.mentor-img {
    margin: 10px;
    width:60px;
    height:60px;
    border-radius: 50%;
}

.mentor-name {
    margin-right: 5px;
    font-weight: bold;
    font-size: 15px;
}
`

function Card({mentorData}) {
    return (
        <Link to={`/mentorprofile/${mentorData.username}`} style={{color: 'inherit', textDecoration: 'inherit'}}>
            <CardItem>
                <div className="mentor-profile">
                    <img className="mentor-img" src={mentorData.images || "https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg"} />
                    <div className="name">
                        <span className="mentor-name">{mentorData.username}</span>
                        <span className="mentor-text">멘토</span>
                    </div>
                    <div className="job">
                        <div className="mentor-company">{mentorData.company}</div>
                        <div>{mentorData.department}</div>
                    </div>
                    <div className="mentor-email">{mentorData.email || 'dev@code.com'}</div>
                </div>
            </CardItem>
        </Link>
    )
}

export default Card
