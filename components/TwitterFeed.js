import styled from 'styled-components';

const Container = styled.div`
  margin: 48px 0px 0px 0px;
`;

export default function TwitterFeed() {
  return (
    <Container>
      <a
        className="twitter-timeline"
        // data-width="720"
        data-theme="light"
        href="https://twitter.com/satyajeet_pal/lists/nba-breaking-news?ref_src=twsrc%5Etfw"
      >
        A Twitter List by satyajeet_pal
      </a>{' '}
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      ></script>
    </Container>
  );
}
