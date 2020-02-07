import React from 'react';
import { Form, FormGroup, TextInput, TextArea } from '@patternfly/react-core';
import useForm from 'react-hook-form';
import * as yup from 'yup';
import { migrationProjectActions } from '../../store/migrationProject';

export type CreateProjectData = {
  projectName: string;
  projectDescription: string;
};

interface Props {
  fetchMigrationProjectIdByName: typeof migrationProjectActions.fetchMigrationProjectIdByName;
  onChange: (isValid: boolean, value: CreateProjectData) => void;
}

const CreateProject: React.FC<Props> = ({ fetchMigrationProjectIdByName, onChange }) => {
  const validationSchema = yup.object().shape({
    projectName: yup
      .string()
      .trim()
      .required('This field is required.')
      .min(3, 'The project name must contain at least 3 characters.')
      .max(250, 'The project name must contain less than 250 characters.')
      .test('availableProjectName', 'The entered name is already in use.', async value => {
        return await fetchMigrationProjectIdByName(value).then((value: any) => !value);
      }),
    projectDescription: yup
      .string()
      .nullable()
      .trim()
      .max(250, 'The project description must contain less than 250 characters.')
  });

  const { register, errors, getValues, setValue, triggerValidation } = useForm<CreateProjectData>({
    mode: 'onSubmit',
    validationSchema
  });

  // useEffect

  React.useEffect(() => {
    register({ name: 'projectDescription' }, { maxLength: 255 });
  }, [register]);

  // Handlers

  const handleProjectDescriptionChange = (value: string) => {
    setValue('projectDescription', value);
  };

  const handleOnFormChange = () => {
    triggerValidation().then((isValid: boolean) => {
      onChange(isValid, getValues());
    });
  };

  return (
    <React.Fragment>
      <Form onChange={handleOnFormChange}>
        <FormGroup
          label="Name"
          isRequired
          fieldId="projectName"
          helperText="A unique name for the project"
          isValid={!errors.projectName}
          helperTextInvalid={errors.projectName && errors.projectName.message}
        >
          <TextInput
            isRequired
            type="text"
            id="projectName"
            name="projectName"
            aria-describedby="projectName"
            ref={register}
            isValid={!errors.projectName}
          />
        </FormGroup>
        <FormGroup
          label="Description"
          fieldId="projectDescription"
          isValid={!errors.projectDescription}
          helperTextInvalid={errors.projectDescription && errors.projectDescription.message}
        >
          <TextArea
            id="projectDescription"
            name="projectDescription"
            placeholder="A short description of the project."
            onChange={handleProjectDescriptionChange}
            isValid={!errors.projectDescription}
          />
        </FormGroup>
      </Form>
    </React.Fragment>
  );
};

export default CreateProject;
