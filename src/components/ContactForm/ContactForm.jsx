import { Formik } from 'formik';
import * as yup from 'yup';
import {
  FormTitle,
  FormikForm,
  FormLabel,
  FormSpan,
  FormInput,
  FormErrorMessage,
  FormBtn,
} from './ContactForm.styled';
import PropTypes from 'prop-types';

const initialValues = {
  name: '',
  number: '',
};

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я\s'-]+$/,
      'Name can only contain letters, spaces, hyphens, and apostrophes'
    )
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
  number: yup
    .string()
    .matches(
      /^\d{6,12}$/,
      'Phone number must be between 6 and 12 digits and contain only numbers'
    )
    .required('Phone number is required'),
});
const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values.name, values.number);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <>
        <FormTitle>Phonebook</FormTitle>
        <FormikForm>
          <FormLabel htmlFor="name">
            <FormSpan>Name:</FormSpan>
            <FormInput type="text" name="name" />
            <FormErrorMessage name="name" component="div" />
          </FormLabel>
          <FormLabel htmlFor="number">
            <FormSpan>Phone:</FormSpan>
            <FormInput type="tel" name="number" />
            <FormErrorMessage name="number" component="div" />
          </FormLabel>
          <FormBtn type="submit">Add contact</FormBtn>
        </FormikForm>
      </>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
