import React, { ReactNode } from 'react';

import unitedImg from '../../assets/images/united.png';

import { Container, Foundation, Image, Title } from './styles';

interface CardProps {}

export function Card({}: CardProps) {
  return (
    <Container animation="slideInDown" duration={2000}>
      <Image
        source={unitedImg}
        resizeMode="contain"
        animation="pulse"
        delay={100}
        iterationCount="infinite"
      />
      <Title>Manchester United</Title>
      <Foundation>1878</Foundation>
    </Container>
  );
}
