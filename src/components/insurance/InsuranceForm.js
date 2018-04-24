import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { BeatLoader } from 'react-spinners';


const InsuranceForm = ({insurance, categories, onSave, onChange, onCancel, saving, errors}) => {
  return (
    <Form>
        <FormGroup>
          <Label for="txtTile">Title</Label>
          <Input type="text" name="title" id="txtTile" placeholder="Enter a title..." onChange={onChange}/>
          {errors.title && <div className="alert alert-danger">{errors.title}</div>}
        </FormGroup>
        <FormGroup>
          <Label for="txtYearlyPremium">Yearly premium</Label>
          <Input type="number" name="yearlyPremium" id="txtYearlyPremium" placeholder="Yearly premium..." onChange={onChange}/>
          {errors.yearlyPremium && <div className="alert alert-danger">{errors.yearlyPremium}</div>}
        </FormGroup>
        <FormGroup>
          <Label for="ddlCategoy">Category</Label>
          <Input type="select" name="category" id="ddlCategoy" onChange={onChange}>
            <option value="">Select a category</option>
            {categories.map((category) => 
              <option key={category.value} value={category.text}>{category.text}</option>
            )}
          </Input>
          {errors.category && <div className="alert alert-danger">{errors.category}</div>}
        </FormGroup>
        <div className='form-footer'>
          {!saving && <Button outline color="success" onClick={onSave}>Submit</Button>}
          <BeatLoader size={10} color={'#9B9B9B'} loading={saving} />
          <Button outline color="secondary" onClick={onCancel}>Cancel</Button>
        </div>
      </Form>
  );
};

InsuranceForm.propTypes = {
  insurance: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default InsuranceForm;
