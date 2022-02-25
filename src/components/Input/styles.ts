import styled from 'styled-components/native';

export const Container = styled.TextInput`
  padding: 0 16px;
  width: 100%;
  height: 54px;

  background: ${({ theme }) => theme.COLORS.BACKGROUND};
  color: ${({ theme }) => theme.COLORS.TEXT};
  
`;
