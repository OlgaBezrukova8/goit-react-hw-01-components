import styled from 'styled-components';

export const Section = styled.section`
  padding: 60px 0px 60px 0px;

  background-color: var(--card-background-color);
`;

export const Container = styled.div`
  margin: 0 auto;
  padding-top: 20px;
  width: 330px;

  background-color: var(--primary-white-color);
`;

export const Title = styled.h2`
  margin-bottom: 20px;

  text-align: center;
  font-size: 16px;
  text-transform: uppercase;
`;

export const List = styled.ul`
  display: flex;
  text-align: center;
`;

export const Item = styled.li`
  padding: 10px 15px 10px 15px;
  width: 100%;

  background-color: ${function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }};
`;

export const Label = styled.span`
  display: flex;
`;

export const Value = styled.span`
  font-weight: 700;
`;
