import { ReactNode } from 'react';
import { ValidationContainer, ValidationText } from './validationBox.styles';

interface IValidationBoxProps {
  error?: string;
  children: ReactNode;
}
function ValidationBox({ error, children }: IValidationBoxProps) {
  return (
    <ValidationContainer>
      {children}
      {error && (
        <ValidationText data-testid="errorText">{error}</ValidationText>
      )}
    </ValidationContainer>
  );
}
export default ValidationBox;
