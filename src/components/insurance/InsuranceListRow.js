import React from 'react';
import PropTypes from 'prop-types';

const InsuranceListRow = ({insurance, openModal}) => {
  return (
    <tr onClick={() => openModal(insurance.id)} style={{cursor:'pointer'}}>
      <td></td>
      <td>{insurance.title}</td>
      <td>{insurance.category}</td>
      <td>{insurance.yearlyPremium}</td>
    </tr>
  );
};

InsuranceListRow.propTypes = {
  insurance: PropTypes.object.isRequired
}

export default InsuranceListRow;
