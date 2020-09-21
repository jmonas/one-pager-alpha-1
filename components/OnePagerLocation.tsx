import { Flex, Badge, Heading, Text,AspectRatioBox, Box, Image} from '@chakra-ui/core';

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
  const location: string = onePagerData.location;
  return (
    <ContentCard title='Location' isLoading={isLoading}>
        <Heading as='h2' size='md' marginRight='10px'>
        <iframe src={location} width="600" height="450" ></iframe>
      </Heading>
    </ContentCard>
  );
};
