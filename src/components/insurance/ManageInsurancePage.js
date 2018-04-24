import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as insurancesActions from '../../actions/insuranceActions';
import InsuranceForm from './InsuranceForm';
import { withRouter } from 'react-router-dom';
import { categoriesFormattedForDropdown } from '../../selectors/selectors';
import toastr from 'toastr';


export class ManageInsurancePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            insurance: Object.assign({}, props.insurance),
            categories: [],
            errors : {},
            saving: false
        };
        
        this.updateInsuranceState = this.updateInsuranceState.bind(this);
        this.saveInsurance = this.saveInsurance.bind(this);
        this.redirect = this.redirect.bind(this);
    }

    insuranceFormIsValid() {
        let formIsValid = true;
        let errors = {};

        if(this.state.insurance.title.length < 5) {
            errors.title = 'Title must be at least 5 characters';
            formIsValid = false;
        }

        if(this.state.insurance.yearlyPremium.length === 0) {
            errors.yearlyPremium = 'Yearly premium cannot be null';
            formIsValid = false;
        }

        if(this.state.insurance.category.length === 0) {
            errors.category = 'You need to select a category';
            formIsValid = false;
        }

        this.setState({
            errors: errors
        });

        return formIsValid;
    }

    updateInsuranceState(event) {
        const field = event.target.name;
        let insurance = Object.assign({}, this.state.insurance);
        insurance[field] = event.target.value;
        return this.setState({insurance: insurance});
    }

    saveInsurance(event) {
        event.preventDefault();
    
        if(!this.insuranceFormIsValid())
            return;

        this.setState({saving: true});

        this.props.actions.saveInsurance(this.state.insurance)
        .then(() => {
            toastr.success('Insurance saved');
            this.setState({saving: false});
            this.redirect();
        })
        .catch((error) => {
            toastr.error(error);
            this.setState({saving: false});
        });
    }

    redirect() {
        this.props.history.push('/');
    }

    render() {
        return (
            <InsuranceForm
                insurance={this.state.insurance}
                categories={this.props.categories}
                onChange={this.updateInsuranceState}
                onCancel={this.redirect}
                onSave={this.saveInsurance}
                errors={this.state.errors}
                saving={this.state.saving}
            />
        );
    }
}


function mapStateToProps(state, ownProps) {
    let insurance = {
        id: "",
        title: "",
        yearlyPremium: "",
        category: ""
    };

    return {
        insurance: insurance,
        categories: categoriesFormattedForDropdown(state.categories)
    };
}
  
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(insurancesActions, dispatch)
    };
}
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ManageInsurancePage));
  