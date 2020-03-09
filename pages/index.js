import styled from 'styled-components';

const Container = styled.div``;

const Body = styled.div`
  margin: 72px auto 80px auto;
  width: 350px;

  @media (min-width: 768px) {
    width: 720px;
  }
`;

const Header = styled.div`
  font-size: 48px;
`;
const TwitterFeed = styled.div`
  margin: 48px 0px 0px 0px;
`;

export default function Index() {
  return (
    <Container>
      <Body>
        <Header>WOJ BOMBS</Header>
        {/* <CountdownClock /> */}
        <TwitterFeed>
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
        </TwitterFeed>
      </Body>
    </Container>
  );
}
