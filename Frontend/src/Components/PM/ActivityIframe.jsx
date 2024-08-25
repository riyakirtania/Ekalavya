import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function ActivityIframe({ onSave }) {
  const [activity, setActivity] = useState({
    nameOfWork: '',
    typeOfUnit: '',
    unitRate: '',
    noOfUnits: '',
    totalCost: '',
    beneficiaryContribution: '',
    grantAmount: '',
    yearOfSanction: ''
  });

  const handleSave = () => {
    onSave(activity);
    window.close(); // Close iframe after saving
    setActivity({
      nameOfWork: '',
      typeOfUnit: '',
      unitRate: '',
      noOfUnits: '',
      totalCost: '',
      beneficiaryContribution: '',
      grantAmount: '',
      yearOfSanction: ''
    });
  };

  return (
    <div className="container mt-5">
      <Form>
        <Form.Group>
          <Form.Label>Name of Work</Form.Label>
          <Form.Control type="text" value={activity.nameOfWork} onChange={(e) => setActivity({ ...activity, nameOfWork: e.target.value })} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Type of Unit</Form.Label>
          <Form.Control type="text" value={activity.typeOfUnit} onChange={(e) => setActivity({ ...activity, typeOfUnit: e.target.value })} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Unit Rate</Form.Label>
          <Form.Control type="number" value={activity.unitRate} onChange={(e) => setActivity({ ...activity, unitRate: e.target.value })} />
        </Form.Group>
        <Form.Group>
          <Form.Label>No of Units</Form.Label>
          <Form.Control type="number" value={activity.noOfUnits} onChange={(e) => setActivity({ ...activity, noOfUnits: e.target.value })} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Total Cost</Form.Label>
          <Form.Control type="number" value={activity.totalCost} onChange={(e) => setActivity({ ...activity, totalCost: e.target.value })} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Beneficiary Contribution</Form.Label>
          <Form.Control type="number" value={activity.beneficiaryContribution} onChange={(e) => setActivity({ ...activity, beneficiaryContribution: e.target.value })} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Grant Amount</Form.Label>
          <Form.Control type="number" value={activity.grantAmount} onChange={(e) => setActivity({ ...activity, grantAmount: e.target.value })} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Year of Sanction</Form.Label>
          <Form.Control type="number" value={activity.yearOfSanction} onChange={(e) => setActivity({ ...activity, yearOfSanction: e.target.value })} />
        </Form.Group>
        <Button variant="primary" onClick={handleSave}>Save</Button>
      </Form>
    </div>
  );
}

export default ActivityIframe;
