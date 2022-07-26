import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  Section,
  TableName,
  TableValue,
} from 'components/TransactionHistory/TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <Section>
      <Table className="transaction-history">
        <thead>
          <TableName>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </TableName>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <TableValue key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </TableValue>
          ))}
        </tbody>
      </Table>
    </Section>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
