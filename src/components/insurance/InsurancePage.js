import React, { Component } from 'react';
import InsuranceList from './InsuranceList';
import InsuranceModal from './InsuranceModal';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as insuranceActions from '../../actions/insuranceActions';
import { withRouter } from 'react-router-dom';
import { Row, Col, Button, Label } from 'reactstrap';
import toastr from 'toastr';


class InsurancePage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
          show: false,
          selectedInsurance : null
      };
        
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.deleteInsurance = this.deleteInsurance.bind(this);
    }

    openModal(insuranceId) {
      var insurance = this.props.insurances.filter((insurance) => {
        return insurance.id === insuranceId;
      });

      if(insurance.length > 0) {
        this.setState({
          show: true,
          selectedInsurance : Object.assign({}, insurance[0])
        });
      } else {
        toastr.error('An error occured, the insurance could not be found');
      }
    }

    closeModal() {
      this.setState({
        show: false,
        selectedInsurance : null
      });
    }

    deleteInsurance(event) {
      event.preventDefault();

      if(!confirm('Are you sure you want to delete this insurance?'))
        return;

      this.closeModal();

      this.props.actions.deleteInsurance(this.state.selectedInsurance.id)
      .then(() => {
        toastr.success('Insurance deleted');
      })
      .catch((error) => {
          toastr.error(error);
      });
    }

    render() {
        const { history, loading, insurances} = this.props;

        return(
          <div>
            <Row>
              <Col className='text-center'>
                <Label>Overview of all your insurances, and the yearly costs. You can add new insurances and delete them.</Label>
              </Col>
            </Row>
            <Row>
              <Col style={{textAlign: 'center', padding:'10px'}}>
                <Button outline color="primary" onClick={() => history.push('/insurance')}>Add Insurance</Button>
              </Col>
            </Row>
            <InsuranceList insurances={insurances} 
                            openModal={this.openModal}
                            loading={loading}/>
            <InsuranceModal show={this.state.show} 
                            closeModal={this.closeModal} 
                            selectedInsurance={this.state.selectedInsurance} 
                            deleteInsurance={this.deleteInsurance}/>
          </div>
        );
    }
};

function mapStateToProps(state, ownProps) {
  return {
    insurances: state.insurances,
    loading: state.ajaxCallsInProgress > 0
  };
}
  
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(insuranceActions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(InsurancePage));