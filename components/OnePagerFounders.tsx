import React from 'react';
import { Box, Flex, Heading, Text, Avatar } from '@chakra-ui/core';

import { OnePagerData, OnePagerPerson } from '../model/model';
import { ContentCard } from './ContentCard';
import  ReactDOM  from  'react-dom';
import { getAllPublicOnePagerData } from '../data/dataService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'



type OnePagerFoundersProps = {
  onePagerData: OnePagerData;
  isLoading: boolean;
};


/** Renders the Founders card. */
export const OnePagerFounders = ({
  onePagerData,
  isLoading,
}: OnePagerFoundersProps) => {
  return (
    <ContentCard title='Founders' isLoading={isLoading}>
      {onePagerData.founders.map((person: OnePagerPerson) => (
        <Founder key={person.name} person={person}></Founder>
      ))}
    </ContentCard>
  );
  
};
/** Renders a Founder component. */

const Founder = ({ person }: { person: OnePagerPerson }) => {
  return (
    
    <Flex align='center'>
      <Avatar marginRight='10px'></Avatar>
      <Box>
        <Box key={person.name} d='inline-flex' alignItems='baseline'>
          <Heading as='h2' size='md' marginRight='10px' marginBottom='0'>
            {person.name}
          </Heading>
          <Heading
            as='h2'
            size='sm'
            marginRight='10px'
            marginBottom='0'
            fontStyle='emphasis'
          >
            {person.title}
          </Heading>
        </Box>
        <Text fontSize='sm' marginTop='0px' marginBottom ='0px'>
          {person.description}
        </Text>
        {person.linkedin ? (<a href={person.linkedin} target='_blank'>
       <i> <FontAwesomeIcon icon={faLinkedin} /></i>
        </a>): null}
        <a href={person.linkedin} target='_blank'>
       <i> <FontAwesomeIcon color="darkblue" icon={faFacebook} /></i>
        </a>
        <a href={person.linkedin} target='_blank'>
       <i> <FontAwesomeIcon color = "black"icon={faGithub} /></i>
        </a>
        
      </Box>
    </Flex>
  );
};
