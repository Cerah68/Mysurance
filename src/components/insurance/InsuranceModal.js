import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col,  Button, Label, Modal, ModalHeader , ModalBody, ModalFooter} from 'reactstrap';

const InsuranceModal = ({show, closeModal, selectedInsurance, deleteInsurance}) => {
  return (
        <Modal isOpen={show} toggle={closeModal}>
          <ModalHeader toggle={closeModal}>Insurance</ModalHeader>
          <ModalBody>
            <Row>
              <Col><Label>Title: </Label></Col>
              <Col><Label className='font-weight-bold'>{selectedInsurance ? selectedInsurance.title : ''}</Label></Col>
            </Row>
            <Row>
              <Col><Label>Category: </Label></Col>
              <Col><Label className='font-weight-bold'>{selectedInsurance ? selectedInsurance.category : ''}</Label></Col>
            </Row>
            <Row>
              <Col><Label>Yearly premium: </Label></Col>
              <Col><Label className='font-weight-bold'>{selectedInsurance ? selectedInsurance.yearlyPremium : ''}</Label></Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button outline color="danger" onClick={deleteInsurance}>Delete</Button>
            <Button outline color="secondary" onClick={closeModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
    );
}

InsuranceModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  selectedInsurance: PropTypes.object,
  deleteInsurance: PropTypes.func.isRequired
};

export default InsuranceModal;
