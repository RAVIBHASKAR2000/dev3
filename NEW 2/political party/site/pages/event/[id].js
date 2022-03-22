/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useQuery } from '@apollo/client';

import Rsvp from '../../components/Rsvp';
import { Avatar, Container, Error, Hero, H1, H2,H3,H4, Html, Loading } from '../../primitives';
import Talks from '../../components/Talks';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Meta, { makeMetaUrl } from '../../components/Meta';
import { fontSizes, gridSize } from '../../theme';
import { GET_EVENT_DETAILS } from '../../graphql/events';
import { isInFuture, formatFutureDate, formatPastDate, stripTags } from '../../helpers';
import { mq } from '../../helpers/media';

function Event({ id, loadingColor }) {
  const { data, loading, error } = useQuery(GET_EVENT_DETAILS, { variables: { event: id } });

  if (loading) return <Loading isCentered color={loadingColor} size="xlarge" />;

  if (error) {
    console.error('Failed to load event', id, error);
    return <Error message="Something went wrong. Please try again later." />;
  }

  if (!data.Event) {
    return <p>Event not found</p>;
  }

  const { description, name, startTime, locationAddress, themeColor,heading} = data.Event;
  const { allRsvps } = data;

  const prettyDate = isInFuture(startTime)
    ? formatFutureDate(startTime)
    : formatPastDate(startTime);

  const metaDescription = `${prettyDate} -- ${stripTags(description)}`;

  return (
    <>
      <Meta title={name} description={stripTags(description)}>
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={makeMetaUrl(`/event/${id}`)} />
        <meta property="og:title" content={name} />
        <meta property="og:type" content="article" />
        <meta name="twitter:description" content={metaDescription} />
      </Meta>
      <Navbar background="#f96c07" />
      <Hero align="left" backgroundColor={themeColor} superTitle={prettyDate} title={name}>
      <Html css={{fontSize:'200%', fontWeight:200}} markup={heading} />
        <p css={{ fontWeight: 200 }}><H3>{locationAddress}</H3></p>
        <Html css={{fontSize:'140%'}} markup={description} />
      </Hero>

      <Footer />
    </>
  );
}

Event.getInitialProps = async ({ query: { id, hex } }) => ({
  id,
  loadingColor: hex ? `#${hex}` : 'currentColor',
});

export default Event;
