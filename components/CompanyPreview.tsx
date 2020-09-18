import { Box, Heading, Skeleton } from '@chakra-ui/core';

type CompanyPreviewProps = {
  title?: string;
  children: any;
};

/**
 * Renders basic card for displaying content.
 * Display skeltons if isLoading.
 * */
export const CompanyPreview = ({
  title,
  children,
}: CompanyPreviewProps) => {
  return (
    <Box
      flex='flex'
      width='sm'
      shadow='xs'
      borderWidth='1px'
      borderColor='grey'
      rounded='lg'
      p='0'
      margin='10px auto'
      bg='white'
      justifyContent='flex-start'
    >
    </Box>
  );
};

