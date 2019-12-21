import React, { Component } from 'react';
import { Form, FormGroup, TextInput, TextArea, Button } from '@patternfly/react-core';
import useForm from 'react-hook-form';

interface CreateProjectForm {
  name: string;
  description: string;
}

const CreateProject: React.FC = () => {
  const { register, handleSubmit, errors, setValue } = useForm();

  // Project description
  React.useEffect(() => {
    register({ name: 'projectDescription' }, { maxLength: 255 });
  }, [register]);

  const handleProjectDescriptionChange = (value: string) => {
    setValue('projectDescription', value);
  };

  // Submit
  const onSubmit = values => {
    console.log(values);
  };

  // Project name validation
  const validateProjectName = values => {
    console.log('valdidate name', values);
  };

  // Render
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup
        label="Name"
        isRequired
        fieldId="projectName"
        helperText="A unique name for the project"
        isValid={!errors.projectName}
        helperTextInvalid={
          errors.projectName &&
          ((errors.projectName.type == 'required' && 'This field is required.') ||
            (errors.projectName.type == 'minLength' && 'The project name must contain at least 3 characters.') ||
            (errors.projectName.type == 'maxLength' && 'The project name must contain less than 250 characters.'))
        }
      >
        <TextInput
          isRequired
          type="text"
          id="projectName"
          name="projectName"
          aria-describedby="projectName"
          ref={register({ required: true, minLength: 3, maxLength: 255 })}
          isValid={errors.projectName ? false : true}
        />
      </FormGroup>
      <FormGroup
        label="Description"
        fieldId="projectDescription"
        isValid={!errors.projectDescription}
        helperTextInvalid={
          errors.projectDescription &&
          ((errors.projectDescription.type == 'required' && 'This field is required.') ||
            (errors.projectDescription.type == 'maxLength' &&
              'The project name must contain less than 250 characters.'))
        }
      >
        <TextArea
          id="projectDescription"
          name="projectDescription"
          placeholder="A short description of the project."
          onChange={handleProjectDescriptionChange}
          isValid={errors.projectDescription ? false : true}
        />
      </FormGroup>
    </Form>
  );
};

export default CreateProject;
