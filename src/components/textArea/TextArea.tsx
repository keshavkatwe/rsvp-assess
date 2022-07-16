import { ComponentPropsWithoutRef } from 'react';
import { StyledTextArea } from './TextArea.styles';
import Typography from '../typography/Typography';

interface ITextAreaProps extends ComponentPropsWithoutRef<'textarea'> {
  label: string;
}
function TextArea({ label, ...otherProps }: ITextAreaProps) {
  return (
    <>
      <Typography variant="h3" margin={[0, 0, 10, 0]}>
        {label}
      </Typography>
      <StyledTextArea {...otherProps} />
    </>
  );
}
export default TextArea;
