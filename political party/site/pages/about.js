/** @jsx jsx */

import { useQuery } from '@apollo/client';
import getConfig from 'next/config';
import { jsx } from '@emotion/core';

import { Avatar, Container, Error, H1, H2, H3, Html, Loading } from '../primitives';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Meta from '../components/Meta';
import { colors, gridSize } from '../theme';
import { GET_ORGANISERS } from '../graphql/organisers';
import { mq } from '../helpers/media';
import { initializeApollo } from '../lib/apolloClient';

const { publicRuntimeConfig } = getConfig();

export default function About() {
  const { meetup } = publicRuntimeConfig;

  const { data: { allOrganisers: organiserData = [] } = {}, loading, error } = useQuery(
    GET_ORGANISERS
  );

  const hasOrganisers = Boolean(organiserData && organiserData.length);
  const allOrganisers = organiserData.filter(o => o.user).map(o => o.user);

  return (
    <>
      <Meta title="About" description={meetup.aboutIntro} />
      <Navbar background="#f96c07" />
      <Container css={{ marginTop: gridSize * 3 }}>
        <H1 hasSeparator css={{ marginBottom: '0.66em' }}>
          About
        </H1>
        
        {meetup.about? (
          <Content>
            <H2  css={{textAlign:'center', marginBottom: '0.66em', marginTop: '1.22em' }}>
             {meetup.abouttitle}
            </H2>

            <div css={{
              display:'flex',
              flex:1,
              
            }}>

                <div>
                        <p>                      
                        <br></br> 
                        <h3>{meetup.aboutsubtitle}</h3>
                        
                        <Html markup={meetup.about} />
                        <br></br>
                        <h3 css={{
                          color:'#e82d10',
                        }}>{ meetup.aboutnotetitle}</h3>{meetup.aboutnote}
                        </p>
                </div>
                
                
    
                <div css={{
                  marginLeft:'2rem',
                  display:'flex',
                  flexDirection:'column',
                  alignItems:'center',
                }}>
                    <div>
                      <img src="./static/aboutus/deviram.jpg" width="180" height="auto"></img><p css={{textAlign:'center',}}>देवीसिंह रणसिंह शेखावत</p>
                    </div>

                    <div>
                    <img src="./static/aboutus/secondleader.jpg" width="180" height="auto"></img><p css={{textAlign:'center',}}>देवीसिंह रणसिंह शेखावत</p>
                    </div> 
                </div>
              
              
              </div>

          </Content>
        ) : null}
      </Container>
      <Footer />
    </>
  );
}

const twitterLink = handle => `https://twitter.com/${handle.slice(1)}`;

const OrganiserList = ({ title, ...props }) => (
  <div
    css={mq({
      backgroundColor: colors.greyLight,
      padding: '1.5rem',
    })}
  >
    {title}
    <ul
      css={mq({
        display: 'flex',
        flexDirection: ['column', 'row'],
        justifyContent: 'space-between',
        listStyle: 'none',
        margin: 0,
        padding: 0,
      })}
      {...props}
    />
  </div>
);
const Organiser = ({ organiser }) => (
  <li
    css={mq({
      display: 'flex',
      listStyle: 'none',
      margin: 0,
      padding: 0,

      ':not(:first-of-type)': {
        marginTop: ['1em', 0],
      },
    })}
  >
    <Avatar name={organiser.name} src={organiser.image && organiser.image.publicUrl} />
    <div css={{ marginLeft: '1em' }}>
      <div css={{ fontWeight: 'bold' }}>{organiser.name}</div>
      {organiser.twitterHandle && (
        <a
          css={{ color: colors.greyDark }}
          href={twitterLink(organiser.twitterHandle)}
          target="_blank"
        >
          {organiser.twitterHandle}
        </a>
      )}
    </div>
  </li>
);
const Content = props => <div {...props} />;

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_ORGANISERS,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}
