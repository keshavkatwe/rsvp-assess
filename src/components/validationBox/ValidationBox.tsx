import { ReactNode } from 'react';

interface IValidationBoxProps {
  error?: string;
  children: ReactNode;
}
function ValidationBox({ error, children }: IValidationBoxProps) {
  return (
    <>
      {children}
      {error && <h3 data-testid="errorText">{error}</h3>}
    </>
  );
}
export default ValidationBox;
