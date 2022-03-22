/** @jsx jsx */

import PropTypes from 'prop-types';
import { jsx } from '@emotion/core';

import { Container } from '../primitives';
import { H1 } from '../primitives/Typography';
import { colors, fontSizes } from '../theme';
import { getForegroundColor } from '../helpers';

export const Hero = ({
  align = 'center',
  backgroundColor = colors.orange,
  children,
  subTitle,
  superTitle,
  
  background='linear-gradient(180deg, rgba(249,108,7,1) 0%, rgba(223,151,22,1) 50%, rgba(228,255,195,0.9836309523809523) 100%)',
  title,
  ...props
}) => {
  const horizontalMargin = align === 'center' ? 'auto' : null;
  const foregroundColor = getForegroundColor(background);

  return (
    <>
      <Wrapper
        align={align}
        backgroundcolor={background}
        foregroundColor={foregroundColor}
        {...props}
      >
        <Container>
          {superTitle && <Subtitle>{superTitle}</Subtitle>}
          <H1>{title}</H1>
          {subTitle && <Subtitle>{subTitle}</Subtitle>}
          <Content horizontalMargin={horizontalMargin}>{children}</Content>
        </Container>
      </Wrapper>
     
      <svg
        css={{ height: '5vw', width: '100vw' }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        
      </svg>
    </>
  );
};

Hero.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
  background: PropTypes.string,
  children: PropTypes.node,
  subTitle: PropTypes.string,
  superTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};

// styled components

const Wrapper = ({ align, background, foregroundColor, ...props }) => (
  <div
    css={{
      background: background,
      color: foregroundColor,
      padding: '7rem 0',
      textAlign: align,
    }}
    {...props}
  />
);

const Content = ({ horizontalMargin, ...props }) => (
  <div
    css={{
      fontSize: [fontSizes.sm, fontSizes.md],
      marginLeft: horizontalMargin,
      marginRight: horizontalMargin,
      marginTop: 30,
      maxWidth: 720,

      a: {
        color: 'inherit',
      },
    }}
    {...props}
  />
);

const Subtitle = ({ horizontalMargin, ...props }) => (
  <div
    css={{
      fontSize: fontSizes.md,
      fontWeight: 'bold',
      textTransform: 'uppercase',
    }}
    {...props}
  />
);
