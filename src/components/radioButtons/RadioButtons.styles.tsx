import styled from 'styled-components';
import { primaryColor } from '../../constants/colors';

export const StyledInput = styled.input`
  appearance: none;
`;
export const StyledRadioContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const StyledItem = styled.div`
  width: calc(50% - 5px);
`;
export const StyledLabel = styled.label<{ isActive: boolean }>`
  width: 100%;
  background: #7e7e7e85;
  display: block;
  padding: 15px 0;
  border-radius: 20px;
  text-align: center;
  ${(props) =>
    props.isActive &&
    `
    background: ${primaryColor}
  `}
`;
