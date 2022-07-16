import { ReactNode } from 'react';
import { ValidationContainer } from './validationBox.styles';

interface IValidationBoxProps {
  error?: string;
  children: ReactNode;
}
function ValidationBox({ error, children }: IValidationBoxProps) {
  return (
    <ValidationContainer>
      {children}
      {error && <h3 data-testid="errorText">{error}</h3>}
    </ValidationContainer>
  );
}
export default ValidationBox;
