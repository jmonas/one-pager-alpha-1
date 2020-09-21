import { Flex, Badge, Heading, Text,AspectRatioBox,Box } from '@chakra-ui/core';

import { OnePagerData } from '../model/model';
import { ContentCard } from './ContentCard';

type OnePagerLocationProps = {
  onePagerData: OnePagerData;
  isLoading: boolean;
};

export const OnePagerLocation = ({
  onePagerData,
  isLoading,
}: OnePagerLocationProps) => {
  return (
    <ContentCard title='Location' isLoading={isLoading}>
        <AspectRatioBox ratio={16 / 9}>
         <Box   
           as="iframe"
           src={onePagerData.location}
           alt="demo"   />
        </AspectRatioBox>
    </ContentCard>
  );
};
