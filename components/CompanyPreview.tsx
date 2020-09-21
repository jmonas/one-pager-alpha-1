import { Box, Heading, Skeleton } from '@chakra-ui/core';

type CompanyPreviewProps = {
  title?: string;
  children: any;
};

/**
 * Renders basic card for displaying company
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
    >
      {title && (
        <>
          <Box>
            <Heading as='h2' size='md' m='0' p='20px 10px 0'>
              {title}
            </Heading>
          </Box>
        </>
      )}
      <Box p='10px'>{children}</Box>
    </Box>
  );
};

/** Renders loading skeletons. */
const LoadingSkeletons = () => {
  return (
    <>
      <Skeleton h='15px' marginBottom='10px'></Skeleton>
      <Skeleton h='15px' marginBottom='10px'></Skeleton>
      <Skeleton h='20px'></Skeleton>{' '}
    </>
  );
};
