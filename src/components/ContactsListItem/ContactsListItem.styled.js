import styled from 'styled-components';
import { ReactComponent as TrashIcon } from '../../images/trash.svg';

export const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(47, 79, 79);
  margin-bottom: 10px;
  padding-left: 8px;

  font-style: italic;
`;

export const ListBtn = styled.button`
  background-color: white;
  padding: 0;
  border: none;
  cursor: pointer;

  &:hover {
  }
`;

export const StyledTrashIcon = styled(TrashIcon)`
  fill: rgb(47, 79, 79);
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    fill: crimson;
    transform: scale(1.15);
  }

  &:active {
    fill: darkred;
  }
`;
