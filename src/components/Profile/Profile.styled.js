import styled from 'styled-components';

export const ContainerCard = styled.div`
  padding: 40px 0px 40px 0px;
  width: 230px;

  text-align: center;

  border: 1px solid var(--primary-accent-color);
`;

export const Image = styled.img`
  margin: 0 auto;
  margin-bottom: 10px;

  width: 80px;
  height: 80px;

  border-radius: 50%;
  border: 2px solid var(--border-accent-color);
`;

export const TextName = styled.p`
  margin-bottom: 6px;
  font-size: 18px;
  font-weight: 700;
`;

export const TextTag = styled.p`
  margin-bottom: 4px;
  font-weight: 600;
  font-size: 12px;
  color: var(--primary-accent-color);
`;

export const TextLocation = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: var(--primary-accent-color);
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-evenly;

  padding: 20px 0px 20px 0px;

  width: 230px;

  background-color: var(--card-background-color);

  border-bottom: 1px solid var(--primary-accent-color);
  border-left: 1px solid var(--primary-accent-color);
  border-right: 1px solid var(--primary-accent-color);
`;

export const Label = styled.span`
  display: flex;

  color: var(--primary-accent-color);
  font-size: 12px;
`;

export const Value = styled.span`
  font-weight: 700;
`;
