import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { Box, Heading, Text, Divider } from '@chakra-ui/core';
import { Header } from './Header';
import { getAllPublicOnePagerData } from '../data/dataService';
import { OnePagerPublicData } from '../model/model';
import { OnePagerData, OnePagerPerson } from '../model/model';
import { ContentCard } from './ContentCard';

import { Image } from "@chakra-ui/core";
/** Renders the home component. */
export const Home = () => {
  const [onePagers, setOnePagers]: [OnePagerPublicData[], any] = React.useState(
    []
  );

  // React hook to load data on first render
  React.useEffect(() => {
    getAllPublicOnePagerData().then((result) => {
      setOnePagers(result);
    });
  }, []);

  return (
    <>
    <Box>
      <Head>
        <title>One Pager Alpha</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <Header />

      <Box d='flex' justifyContent='center'>
        <Box w='xl' width='100%'>
          <Heading as='h1' size='xl' textAlign='center'>
            Welcome to One Pager Alpha!
          </Heading>

          <Heading as='h2' size='md' textAlign='center'>
            View active OnePagers
          </Heading>

          <Divider />
          <br/>      
   
        </Box>
      </Box>
      <Box d='flex' marginLeft='40px' marginRight='40px' justifyContent='`center`'>
      <OnePagerLinks onePagers={onePagers} />

    </Box>
    </Box>
    
    </>
  );
};

type OnePagerLinksProps = {
  onePagers: OnePagerPublicData[];
  
};

type OnePagerLocationProps = {
  isLoading: boolean;
};
const OnePagerLinks = ({ onePagers }: OnePagerLinksProps) => {

  return (
    <>
      {onePagers.map((onePagerData: OnePagerPublicData) => (<>
      
          <ContentCard isLoading={false} height='300px'>
          <Link href='/[onePagerSlug]' as={`/${onePagerData.url}`}><a>
          <Box d='flex' justifyContent='center'>
          <Image width='100%'  marginRight='20px' height = '125px'src={onePagerData.companyImage} alt="Segun Adebayo" /> 
        </Box></a>
        </Link>

          <Link href='/[onePagerSlug]' as={`/${onePagerData.url}`}>
            <a>{<Text fontSize='1.10rem' marginTop='10px' marginBottom='10px' color='black'>{onePagerData.briefDescription}</Text>}</a>
          </Link>
          </ContentCard>         
          </>
        
      ))}
    </>
  );
};
