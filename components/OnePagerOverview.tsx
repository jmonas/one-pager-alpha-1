import { Flex, Badge, Heading, Text, useToast, Button, ButtonGroup } from '@chakra-ui/core';
import { useState } from 'react';

import { OnePagerData } from '../model/model';
import { ContentCard } from './ContentCard';
type OnePagerOverviewProps = {
  onePagerData: OnePagerData;
  isLoading: boolean;
};

export const OnePagerOverview = ({
  onePagerData,
  isLoading,
}: OnePagerOverviewProps) => {
    const toast = useToast();
    const [buttonState, setButtonState] = useState(false);

    const handleClick=()=>{
      setButtonState(!buttonState)
      buttonState?(toast({
        position: "bottom-left",
        title: `You're now following ${onePagerData.companyName}`,
        status: "success",
        duration: 2000,
      })):null;
    }

    

  return (
    <ContentCard title='Overview' isLoading={isLoading}>
      <Heading as='h1' size='lg' marginRight='10px'>
        {onePagerData.companyName}

        {buttonState?(<Button variantColor="blue" variant="outline" size="xs" marginLeft="15px"
      onClick={handleClick}> Follow
      </Button>):(<Button variantColor="blue" variant="solid" size="xs" marginLeft="15px"
      onClick={handleClick}> Following</Button>)}

       
      </Heading>
      <Heading as='h2' size='sm' color='black' fontStyle='italic'>
        {onePagerData.briefDescription}
      </Heading>
      <Heading as='h1' fontSize='sm' color='grey' fontStyle='oblique' fontWeight='normal'>
        Est. Marketsize: {onePagerData.marketsize}
        </Heading>
      <Flex>
        {onePagerData.industryTags.map((tag: string) => {
          return (
            <Badge
              key={tag}
              rounded='full'
              px='2'
              variantColor='blue'
              marginRight='10px'
            >
              {tag}
            </Badge>
          );
        })}
      </Flex>
      <Text fontSize='sm'>{onePagerData.detailDescription}</Text>
    </ContentCard>
  );
};
