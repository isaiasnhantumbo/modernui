import React from 'react';

import { Container, Content, Header, Title } from './styles';
import bgImage from '../../assets/images/cover.png';
import { Input } from '../../components/Input';
import { Card } from '../../components/Card';

export function Home() {
  return (
    <Container>
      <Header source={bgImage}>
        <Input placeholder="Pesquisar..." />
      </Header>
      <Content>
        <Card />
      </Content>
    </Container>
  );
}
