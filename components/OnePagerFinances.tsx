import React from 'react';
import { Flex, Badge, Heading, Text, Box, Divider } from '@chakra-ui/core';
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/core";
import { OnePagerData, OnePagerPerson } from '../model/model';
import { ContentCard } from './ContentCard';
import { OnePagerFounders } from './OnePagerFounders';
import { Tooltip } from "@chakra-ui/core";

type OnePagerFinancesProps = {
  onePagerData: OnePagerData;
  isLoading: boolean;
};
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0
})
const formatter2 = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0
})

/** Renders the Finances card. */
export const OnePagerFinances = ({
  onePagerData,
  isLoading,
}: OnePagerFinancesProps) => {
  // Format a number to include a dollar sign. This function
  // will be improved as part of task 2.
  const formatFinanceNumber = (financeNumber: number) => {
    return formatter.format(financeNumber);
  };

   const Founder = ({ company }: { company: OnePagerPerson }) => {
    return <Text fontSize='sm'>{company.companyInv}</Text> 
  }; 


  const raised = onePagerData.fundsRaisedInStage;
  const goal = onePagerData.fundraisingStageGoal;
  const percent = raised/goal *100;
  const rounded = Math.round(percent).toString();
  const investors:OnePagerPerson[] = onePagerData.investors;
  
  return (
    <ContentCard title='Finances' isLoading={isLoading}>
      <Text fontSize='sm'>{"Goals: " + onePagerData.fundraisingDetails}</Text>
      
      <Box d= "flex" marginTop="5px" alignItems ="strech">
          <Box>
            <Heading as='h1' size='lg' marginRight='10px' marginBottom='0'>
              Funding Stage: {onePagerData.fundraisingStage}
            </Heading>
            <SubHeading >
              Funds Raised: {formatFinanceNumber(onePagerData.fundsRaisedInStage)}
            </SubHeading>
            <SubHeading>
              Funding Goal: {formatFinanceNumber(onePagerData.fundraisingStageGoal)}
            </SubHeading>          
          </Box>
        <Box marginLeft = "100px" marginTop="20px"> 
          <CircularProgress value={percent} color="green" size = {"150px"}>
          <CircularProgressLabel>{rounded}%</CircularProgressLabel>
          </CircularProgress>       
        </Box>
      </Box>
      {investors ? (<>
        <Divider/>
        <SubHeading>
              Investors
            </SubHeading>
      <Investors investors={investors}/></> ):null}
    </ContentCard>
  );
};


type InvestorsProps = {
  investors: OnePagerPerson[];
};
const Investors = ({investors}:InvestorsProps )=>(
  <Box>
    {investors && investors.map((company: OnePagerPerson) =>(
    <Box>
      <Text fontSize='sm'><li>{company.companyInv}</li></Text>
    </Box>)
    )}
    </Box>
);



/** Renders smaller heading. */
const SubHeading = ({ children }) => (
  <Heading as='h2' size='md' marginRight='10px'>
    {children}
  </Heading>
);
