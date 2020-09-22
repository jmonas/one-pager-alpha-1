import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
import { Box, Heading, Text, Divider, Input } from '@chakra-ui/core';
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
  const [searchTerm, setSearchTerm]:[string, any] = useState("")


  // React hook to load data on first render
  React.useEffect(() => {
    getAllPublicOnePagerData().then((result) => {
      console.log('useffec')
      setOnePagers(result);
    });
  }, []);

  const searchHandler= event =>{
    setSearchTerm(event.target.value);
  }

  const searchedCompanies = onePagers.filter(comp =>{
    return comp.companyName.toLowerCase().startsWith(searchTerm.toLowerCase());
    });



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
          <Heading as='h1' alignContent='center' 
>
            <Input variant="outline" w='md' margin='20px auto' placeholder="Search" value = {searchTerm} onInput={searchHandler}/>
          </Heading>

          <Divider />
          <br/>      
   
        </Box>
      </Box>
      <Box d='flex' marginLeft='40px' marginRight='40px' justifyContent='`center`'>
      <OnePagerLinks onePagers={searchedCompanies} />
    </Box>
    </Box>
    
    </>
  );
};

type OnePagerLinksProps = {
  onePagers: OnePagerPublicData[];
};


const OnePagerLinks = ({ onePagers }: OnePagerLinksProps) => {

  return (
    <>
      {onePagers.map((onePagerData: OnePagerPublicData) => (<>
          <ContentCard isLoading={false} height='300px' maxWidth ='300px'>
          <Link href='/[onePagerSlug]' as={`/${onePagerData.url}`}><a>
          <Box d='flex' width='auto' padding='0' justifyContent='center'>
          <Image width='100%'margin='0 auto' height = '125px' src={onePagerData.companyImage}/> 
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
