import { Formik } from 'formik';
import {
  FormLabel,
  FormSpan,
  FormInput,
} from 'components/ContactForm/ContactForm.styled';
import PropTypes from 'prop-types';

const Filter = ({ filter, filterValue }) => {
  return (
    <Formik>
      <FormLabel htmlFor="filter">
        <FormSpan>Find contacts by name</FormSpan>
        <FormInput
          type="text"
          name="filter"
          value={filter}
          onChange={filterValue}
        />
      </FormLabel>
    </Formik>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  filterValue: PropTypes.func.isRequired,
};

export default Filter;
