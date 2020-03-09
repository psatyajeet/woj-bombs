import dynamic from 'next/dynamic';
import { Component } from 'react';
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

const TwitterFeed = dynamic(() => import('../components/TwitterFeed'), {
  ssr: true
});

export default class Index extends Component {
  async getInitialProps() {}

  render() {
    return (
      <Container>
        <Body>
          <Header>WOJ BOMBS</Header>
          {/* <CountdownClock /> */}
          <TwitterFeed />
        </Body>
      </Container>
    );
  }
}
