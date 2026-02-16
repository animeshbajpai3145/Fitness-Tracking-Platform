import React from 'react'
import styled from "styled-components";
import { FitnessCenterRounded,TimelapseRounded } from '@mui/icons-material';

const Card  = styled.div``;
const Category  = styled.div``;
const Name  = styled.div``;
const Sets  = styled.div``;
const Flex  = styled.div``;
const Details  = styled.div``;



const WorkoutCard = () => {
  return (
   <Card>
      <Category>#Legs</Category>
      <Name>Back Squat</Name>
      <Sets>
         Count: 5sets X 10 reps
      </Sets>
      <Flex>
         <Details>
            <FitnessCenterRounded sx={{fontSize:"20px"}}/>
             30kg
            
         </Details>
          <Details>
            <TimelapseRounded sx={{fontSize:"20px"}}/>
             30kg
            
         </Details>
      </Flex>
   </Card>
  )
}

export default WorkoutCard
