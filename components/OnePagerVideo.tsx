import React from 'react';
import { Flex, Badge, Heading, Text,AspectRatioBox,Box } from '@chakra-ui/core';
import { OnePagerData } from '../model/model';
import { ContentCard } from './ContentCard';

type OnePagerVideoProps = {
  onePagerData: OnePagerData;
  isLoading: boolean;
  
};

export const OnePagerVideo = ({
  onePagerData,
  isLoading,
}: OnePagerVideoProps) => {
  return (
    <ContentCard title='Pitch Video' isLoading={isLoading}>
      <Heading as='h2' size='md' marginRight='10px'>
        <iframe src={onePagerData.pitchVideoLink} width="600" height="450" ></iframe>
      </Heading>
    </ContentCard>
  );
};
