import React from 'react';
import PropTypes from 'prop-types';
import InsuranceListRow from './InsuranceListRow';
import { Table } from 'reactstrap';
import { BeatLoader } from 'react-spinners';

const InsuranceList = ({insurances, openModal, loading}) => {
  return (
    <Table hover>
      <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Title</th>
            <th>Category</th>
            <th>Yearly premium</th>
         </tr>
      </thead>
      <tbody>
        {
          loading ? <LoadingRow loading={loading}/> : insurances.length === 0 ? <NoDataRow /> :     
          insurances.map(insurance => 
          <InsuranceListRow key={insurance.id} insurance={insurance} openModal={openModal}/>
        )}
    </tbody>
    <tfoot>
      <tr>
          <th>&nbsp;</th>
          <th>&nbsp;</th>
          <th>&nbsp;</th>
          <th>
            {!loading && insurances.length > 0 && insurances.reduce((acc, val) => acc + parseInt(val.yearlyPremium), 0)}
          </th>
        </tr>  
    </tfoot>
    </Table>
  );
};

const NoDataRow = () => {
  return (
    <tr id="noDataRow">
      <td colSpan='4' style={{textAlign:'center', fontStyle:'italic', opacity:0.8}}>
        You have no insurances
      </td>
    </tr>
  );
};

const LoadingRow = () => {
  return (
    <tr id="loadingRow">
      <td colSpan='4' className='text-center'>
        <BeatLoader size={10} color={'#9B9B9B'} />
      </td>
    </tr> 
  );
};

InsuranceList.propTypes = {
  insurances: PropTypes.array.isRequired
}

export default InsuranceList;
