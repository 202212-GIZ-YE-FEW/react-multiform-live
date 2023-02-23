import React from 'react'
import { StepContainer, StepDescription, StepNumber, StepTitle } from './Step.styled'

const Step = (props) => {
  const {stepNumber, stepDescription, onClick} = props
  return (
    <StepContainer onClick={onClick}>
      <StepNumber>{stepNumber}</StepNumber>
      <div style={{marginLeft: "5px"}}>
        <StepTitle>STEP {stepNumber}</StepTitle>
        <StepDescription>{stepDescription}</StepDescription>
      </div>
    </StepContainer>
  )
}

export default Step