import { OnePagerData, OnePagerPublicData } from '../model/model';
import * as founders from './founders';
import * as investors from './investors';

/** An empty one pager, for initial React state */
export const EMPTY_ONE_PAGER: OnePagerData = {
  companyName: '',
  url: '',
  industryTags: [],
  briefDescription: '',
  founders: [],
  companyImage:'',
};

const facebook: OnePagerData = {
  companyName: 'Facebook',
  url: 'facebook',
  industryTags: ['Social Media', 'Messaging', 'Mobile'],
  briefDescription:
    'Online social networking platform for users to connect with friends and family',
  detailDescription:
    'Users can create a profile, share images and other media, send and accept friend requests. Largest social media with more than 2B users worldwide',
  fundraisingStage: 'Seed',
  fundraisingStageGoal: 500000,
  fundsRaisedInStage: 100000,
  fundraisingDetails: 'To transform from a school network to a public website',
  founders: [founders.facebook1, founders.facebook2, founders.facebook3],
  pitchVideoLink: 'https://www.youtube.com/embed/WzgNAN3dW-I',
  investors: [investors.investor2, investors.investor3],
  marketsize: '$57B', 
  location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2639.3485225201835!2d-122.15126624388027!3d37.4832625475002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbc96de8dc419%3A0x64979e438bf4e3a5!2sFacebook!5e0!3m2!1sen!2sus!4v1600698175599!5m2!1sen!2sus',
  companyImage: 'https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/-XM2Nhn2gP6.png'
};

const lendingClub: OnePagerData = {
  companyName: 'Lending Club',
  url: 'lending-club',
  industryTags: ['P2P', 'Consumer Lending', 'Finance'],
  briefDescription: 'P2P platform for creditworthy borrowers and lenders',
  detailDescription:
    'Peer lending network that brings together creditworthy borrowers and investors for simpler borrowing and investing at better rates',
  fundraisingStage: 'Series B',
  fundraisingStageGoal: 12000000,
  fundsRaisedInStage: 5000000,
  fundraisingDetails: 'Expand capabilities and accelerate customer growth',
  founders: [founders.lendingClub1, founders.lendingClub2],
  marketsize: '37B', 
  companyImage: 'https://www.lendingclub.com/asset/ls/wp-assets/wp-content/uploads/2017/05/LC-Logo-Official-min-1024x418.png?v=2017-05-17T10:05:03'

  
};

const spotify: OnePagerData = {
  companyName: 'Spotify',
  url: 'spotify',
  industryTags: ['music', 'streaming'],
  briefDescription: 'Ad-financed music streaming service	',
  detailDescription:
    'Commercial streaming service that provides digital content from a wide range of artists. Users can search music, create, share playlists, and integrate social media accounts. Can be access on computers or mobile devices.',
  fundraisingStage: 'Series A',
  fundraisingStageGoal: 21600000,
  fundsRaisedInStage: 500000,
  fundraisingDetails: 'Grow music library and licenses, developers salaries',
  founders: [founders.spotify1, founders.spotify2],
  pitchVideoLink: 'https://www.youtube.com/embed/ZDXETBfXSuc',
  investors: [investors.investor1],
  marketsize: '56B', 
  companyImage: 'https://www.scdn.co/i/_global/open-graph-default.png'


};

const workday: OnePagerData = {
  companyName: 'Workday',
  url: 'workday',
  industryTags: ['SaaS', 'HR', 'Software'],
  briefDescription: 'SaaS provider for enterprises',
  detailDescription:
    'Provides human capital management, payroll, financial management software solutions for enterprises',
  fundraisingStage: 'Pre-Seed',
  fundraisingStageGoal: 15000000,
  fundsRaisedInStage: 1000000,
  fundraisingDetails: 'Develop software platform',
  founders: [founders.workday1, founders.workday2],
  investors: [investors.investor1, investors.investor2],
  marketsize: '9.8B', 
  location:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.9340041837113!2d-122.39573708468184!3d37.79158637975644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f015967d%3A0x5107127fbbe21ba6!2sWorkday%20-%20San%20Francisco!5e0!3m2!1sen!2sus!4v1600698674972!5m2!1sen!2sus',
  companyImage: 'https://www.workday.com/content/dam/web/en-us/images/social/workday-og-theme.png'

};

const zynga: OnePagerData = {
  companyName: 'Zynga',
  url: 'zynga',
  industryTags: ['Gaming', 'Mobile'],
  briefDescription: 'Develops and operates social games',
  detailDescription:
    'Offers online social games such as Words With Friends, Zynga Poker and Farmville. Operates games on web, social networking sites and mobile platforms worldwide. Provides advertising services in its games.',
  fundraisingStage: 'Series B',
  fundraisingStageGoal: 29000000,
  fundsRaisedInStage: 10000000,
  fundraisingDetails: 'Game production, acquisition and marketing',
  founders: [founders.zynga1, founders.zynga2, founders.zynga3],
  pitchVideoLink: 'https://www.youtube.com/embed/HdVWHAPiqno',
  investors: [investors.investor1, investors.investor3],
  marketsize: '49B', 
  location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27650155.636510186!2d-118.03733055524977!3d32.22408055811344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e32567b8339%3A0xdaea45de58ad3064!2sZynga!5e0!3m2!1sen!2sus!4v1600698754733!5m2!1sen!2sus',
  companyImage: 'https://static.media.thinknum.com/media/uploads/blog/.thumbnails/alternativedata_zynga_covid_featured.jpg/alternativedata_zynga_covid_featured-770x400.jpg'

};

/** Map of urls to full one pager data. */
export const ONE_PAGERS_ALL_DATA_MAP: Map<string, OnePagerData> = new Map([
  [facebook.url, facebook],
  [lendingClub.url, lendingClub],
  [spotify.url, spotify],
  [workday.url, workday],
  [zynga.url, zynga],
]);

/** Array of all public one pager data. */
export const ONE_PAGERS_PUBLIC_DATA_ARRAY: OnePagerPublicData[] = Array.from(
  ONE_PAGERS_ALL_DATA_MAP.values()
).map((onePager: OnePagerData) => {
  return {
    companyName: onePager.companyName,
    url: onePager.url,
    industryTags: onePager.industryTags,
    briefDescription: onePager.briefDescription,
    companyImage:onePager.companyImage,
  };
});
