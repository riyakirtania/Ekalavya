import React, { useState } from 'react';
import { Table, Button, Collapse } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const BeneficiaryTable = ({ beneficiaries }) => {
  const [open, setOpen] = useState({});
  const toggleCollapse = (index) => {
    setOpen(prevState => ({ ...prevState, [index]: !prevState[index] }));
  };

  return (
    <div>
      <h3>Beneficiary List</h3>
      <Table bordered hover responsive>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Beneficiary Name</th>
            <th>Father/Husband Name</th>
            <th>Village</th>
            <th>Mandal</th>
            <th>District</th>
            <th>State</th>
            <th>Aadhar</th>
            <th>Survey No.</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {beneficiaries.map((beneficiary, index) => (
            <React.Fragment key={beneficiary.id}>
              <tr>
                <td>{beneficiary.projectName}</td>
                <td>{beneficiary.beneficiaryName}</td>
                <td>{beneficiary.fatherHusbandName}</td>
                <td>{beneficiary.village}</td>
                <td>{beneficiary.mandal}</td>
                <td>{beneficiary.district}</td>
                <td>{beneficiary.state}</td>
                <td>{beneficiary.aadhar}</td>
                <td>{beneficiary.surveyNo}</td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => toggleCollapse(index)}
                    aria-controls={`collapse-${index}`}
                    aria-expanded={open[index]}
                  >
                    View Components
                  </Button>
                </td>
              </tr>
              <tr>
                <td colSpan="10" style={{ padding: 0 }}>
                  <Collapse in={open[index]}>
                    <div id={`collapse-${index}`} style={{ padding: '10px' }}>
                      {beneficiary.components.map((component, compIndex) => (
                        <div key={compIndex}>
                          <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey={compIndex}>
                              <Accordion.Header>{component.name}</Accordion.Header>
                              <Accordion.Body>

                                <Table striped bordered hover>
                                  <thead>
                                    <tr>
                                      <th>Name of the Work</th>
                                      <th>Type of Unit</th>
                                      <th>Unit Rate</th>
                                      <th>No. of Units</th>
                                      <th>Total Cost</th>
                                      <th>Beneficiary Contribution</th>
                                      <th>Grant Amount</th>
                                      <th>Year of Sanction</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {component.activities.map((activity, activityIndex) => (
                                      <tr key={activityIndex}>
                                        <td>{activity.nameOfWork}</td>
                                        <td>{activity.typeOfUnit}</td>
                                        <td>{activity.unitRate}</td>
                                        <td>{activity.noOfUnits}</td>
                                        <td>{activity.totalCost}</td>
                                        <td>{activity.beneficiaryContribution}</td>
                                        <td>{activity.grantAmount}</td>
                                        <td>{activity.yearOfSanction}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </Table>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </div>
                      ))}
                    </div>
                  </Collapse>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BeneficiaryTable;
