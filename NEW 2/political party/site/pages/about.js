/** @jsx jsx */


import getConfig from 'next/config';
import { jsx } from '@emotion/core';

import { Avatar, Container, Error, H1, H2, H3, Html, Loading } from '../primitives';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Meta from '../components/Meta';
import { colors, gridSize } from '../theme';

import { mq } from '../helpers/media';


const { publicRuntimeConfig } = getConfig();

export default function About() {
  const { meetup } = publicRuntimeConfig;


  return (
    <>
      <Meta title="About" description={meetup.aboutIntro} />
      <Navbar background="#f96c07" />
      <Container css={{ marginTop: gridSize * 3 }}>
        <H1 hasSeparator css={{ marginBottom: '0.66em' }}>
          About
        </H1>
        <div css={{textAlign:'center'}}>
            <img src="./static/abkmfounder1.jpg" width="300" height="auto"></img>
        </div>

        {meetup.about? (
          <Content>
          <hr css={{height:'3px',
              color:'black',
              backgroundColor:'black',
              borderWidth:'0'
           }}></hr>
              <H2  css={{marginBottom: '0.66em', marginTop: '1.22em' , textAlign:'center'}}>
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


const Content = props => <div {...props} />;
