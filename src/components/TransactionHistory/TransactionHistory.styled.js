import styled from 'styled-components';

export const Section = styled.section`
  padding: 60px 0px 60px 0px;
  background-color: var(--card-background-color);
`;

export const Table = styled.table`
  margin: 0 auto;

  border-collapse: collapse;
  border: 2px solid var(--primary-white-color);
  box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
`;

export const TableName = styled.tr`
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;

  background-color: var(--table-background-color);
`;

export const TableValue = styled.tr`
  font-weight: 400;
  border: 1px solid var(--primary-white-color);

  &:nth-child(2n) {
    background-color: var(--table-color);
  }
`;
