import styled from 'styled-components';

export const List = styled.li`
  padding: 15px 20px;
  display: flex;
  align-items: center;

  width: 100%;
  border: 1px solid var(--card-background-color);

  &:not(:last-child) {
    margin-bottom: 15px;
  }
  border-radius: 10px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`;

export const Status = styled.span`
  margin-right: 15px;

  width: 10px;
  height: 10px;

  border-radius: 50%;

  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;

export const Image = styled.img`
  margin-right: 20px;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 700;
`;
