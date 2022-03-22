/** @jsx jsx */

import { jsx } from '@emotion/core';

import { Container, Loading, H2, H3 } from '../primitives';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Meta from '../components/Meta';
import { gridSize } from '../theme';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Organisation() {
 
  return (
      <>
      <Meta title="organisation" />
      <Navbar background="#f96c07" />
      <Container css={{ marginTop: gridSize * 3 }}>
        <H2>Organisation</H2>
        <div css={{
          marginTop:'5rem',
        }}>

        
      
     </div>
      </Container>
      <Footer />
      </>
    );
  
}
