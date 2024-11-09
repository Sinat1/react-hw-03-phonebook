import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormTitle = styled.h1`
  font-style: italic;
  font-size: 35px;
`;

export const FormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 25px;
`;

export const FormLabel = styled.label`
  font-style: italic;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  width: 270px;
  margin-bottom: 10px;

  &:nth-child(2) {
    margin-bottom: 20px;
  }
`;

export const FormSpan = styled.span`
  padding-left: 8px;
`;

export const FormInput = styled(Field)`
  height: 25px;
  border-radius: 10px;
  border: 1px solid rgb(47, 79, 79);
  padding-left: 8px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`;

export const FormErrorMessage = styled(ErrorMessage)`
  font-size: 12px;
  color: red;
  padding-top: 3px;
  padding-left: 8px;
`;

export const FormBtn = styled.button`
  width: 140px;
  height: 30px;
  border-radius: 10px;
  padding: 5px 10px 5px 10px;

  font-size: 16px;
  font-style: italic;

  background-color: lightblue;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);

  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: white;
    background-color: #a0d6e5;
    transform: scale(1.03);
  }

  &:active {
    color: white;
    background-color: #8ec2cf;
  }
`;
