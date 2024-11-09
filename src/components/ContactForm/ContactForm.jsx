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

const initialValues = {
  name: '',
  number: '',
};

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  number: yup.string().min(6).max(12).required('Phone number is required'),
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

export default ContactForm;

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleData = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = e => {
//     const { name, number } = this.state;
//     e.preventDefault();

//     this.props.onSubmit(name, number);

//     this.setState({ name: '', number: '' });
//     return;
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <Formik>
//         <FormTitle>Phonebook</FormTitle>
//         <FormikForm onSubmit={this.handleSubmit}>
//           <FormLabel htmlFor="name">
//             Name:
//             <FormInput
//               type="text"
//               name="name"
//               value={name}
//               onChange={this.handleData}
//             />
//           </FormLabel>
//           <FormLabel htmlFor="number">
//             Phone:
//             <FormInput
//               type="tel"
//               name="number"
//               value={number}
//               onChange={this.handleData}
//             />
//           </FormLabel>
//           <button type="submit">Add contact</button>
//         </FormikForm>
//       </Formik>
//     );
//   }
// }
