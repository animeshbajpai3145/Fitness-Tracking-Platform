import React from 'react'
import styled from "styled-components";
import TextInput from "../TextInput.jsx";
import {useState} from "react";
import Button from "../Button.jsx"

const Card = styled.div`
flex:1;
min-width: 280px;
padding : 24px;
border: 1px solid ${({theme})=> theme.text_primary+20};
border-radius: 14px;
display: flex;
flex-direction:column;
@media (max-width:600px){
padding: 16px;
}
gap: 6px;
box-shadow: 1px 6px 20px 0px ${({theme})=>theme.primary+15}
`;

const Title = styled.div`
font-weight:600;
font-size:16px;
color:${({theme})=>theme.primary};
@media (max-width: 600px){
font-size:14px;}`;

const AddWorkout = ({workout ,setWorkout}) => {
 
  return (
   <Card>
    <Title>Weekly Calories Burned</Title>
    <TextInput
    lable="Workout"
    textArea rows={10}
    placeholder={`Enter in this format:

#Category
 -Workout Name
  -Sets
  -Reps
  -Weight
  -Duration
      `
    }
    value={workout} handleChange={(e)=> setWorkout(e.target.value)}/>
    <Button text="Add Workout" small/>
    
   </Card>
  )
}

export default AddWorkout
