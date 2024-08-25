import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import ActivityIframe from './ActivityIframe';

const BeneficiaryForm = ({ projects, addBeneficiary, setShowBeneficiaryTable }) => {
  const [beneficiary, setBeneficiary] = useState({
    projectName: '',
    beneficiaryName: '',
    fatherHusbandName: '',
    village: '',
    mandal: '',
    district: '',
    state: '',
    aadhar: '',
    surveyNo: '',
    components: []
  });

  const [components, setComponents] = useState([
    { name: 'Material' },
    { name: 'labour' }
  ]);
  const [showForm, setShowForm] = useState(false);
  const [showIframe, setShowIframe] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState('');
  const [activities, setActivities] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBeneficiary({ ...beneficiary, [name]: value });
  };



  const handleSaveComponent = () => {
    const newComponent = {
      name: selectedComponent,
      activities: activities
    };
    setBeneficiary({
      ...beneficiary,
      components: [...beneficiary.components, newComponent]
    });
    setActivities([]);
    setShowIframe(false);
  };

  const handleAddActivity = (activity) => {
    setActivities([...activities, activity]);
    console.log(activities);
  };

  const handleSubmit = () => {
    addBeneficiary(beneficiary);
    setShowBeneficiaryTable(true);
  };

  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Project Name</Form.Label>
          <Form.Control as="select" name="projectName" onChange={handleChange}>
            <option>Select Project</option>
            {projects.map((project, index) => (
              <option key={index} value={project.projectName}>
                {project.projectName}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Beneficiary Name</Form.Label>
          <Form.Control name="beneficiaryName" placeholder="Beneficiary Name" onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Father/Husband Name</Form.Label>
          <Form.Control name="fatherHusbandName" placeholder="Father/Husband Name" onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Village</Form.Label>
          <Form.Control name="village" placeholder="Village" onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Mandal</Form.Label>
          <Form.Control name="mandal" placeholder="Mandal" onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>District</Form.Label>
          <Form.Control name="district" placeholder="District" onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>State</Form.Label>
          <Form.Control name="state" placeholder="State" onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Aadhar</Form.Label>
          <Form.Control name="aadhar" placeholder="Aadhar" onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Survey No.</Form.Label>
          <Form.Control name="surveyNo" placeholder="Survey No." onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Component</Form.Label>
          <Form.Control as="select" value={selectedComponent} onChange={(e) => setSelectedComponent(e.target.value)}>
            <option>Select Component</option>
            {components.map(component => (
              <option key={component.id} value={component.name}>{component.name}</option>
            ))}
          </Form.Control>

        </Form.Group>
        <Button variant="secondary" onClick={() => setShowIframe(true)}>Add Activity</Button>
        <Button variant="primary" onClick={handleSaveComponent}>Save Component</Button>
        {showIframe && (
          <ActivityIframe onSave={handleAddActivity} />
        )}
      </Form>
      <Button variant="secondary" onClick={() => setShowForm(false)}>
        Close
      </Button>
      <Button variant="primary" onClick={handleSubmit}>
        Save Beneficiary
      </Button>
    </Container>
  );
};

export default BeneficiaryForm;
