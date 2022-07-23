import React from 'react';
import PropTypes from 'prop-types';

import {
  Section,
  Container,
  Title,
  List,
  Label,
  Value,
  Item,
} from 'components/Statistics/Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <Section>
      <Container>
        {title && <Title>{title}</Title>}

        <List>
          {stats.map(({ id, label, percentage }) => (
            <Item key={id}>
              <Label>{label}</Label>
              <Value>{percentage}%</Value>
            </Item>
          ))}
        </List>
      </Container>
    </Section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
