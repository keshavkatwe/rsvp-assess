import { useState } from 'react';
import {
  StyledInput,
  StyledItem,
  StyledLabel,
  StyledRadioContainer,
} from './RadioButtons.styles';
import Typography from '../typography/Typography';

type IRadioVal = string;

interface IRadioButtonsProps {
  possibleValues: string[];
  onChange?: (val: IRadioVal) => void;
  value?: IRadioVal;
  label: string;
}
function RadioButtons({
  possibleValues,
  onChange,
  value,
  label,
}: IRadioButtonsProps) {
  const [selected, setSelected] = useState(value);

  return (
    <>
      <Typography variant="h3" margin={[0, 0, 10, 0]}>
        {label}
      </Typography>
      <StyledRadioContainer>
        {possibleValues.map((val) => (
          <StyledItem key={val}>
            <StyledLabel
              isActive={selected === val}
              htmlFor={`radio_button_${val}`}
            >
              {val}
            </StyledLabel>
            <StyledInput
              type="radio"
              id={`radio_button_${val}`}
              data-testid={`radio_button_${val}`}
              value={val}
              checked={selected === val}
              onChange={(event) => {
                onChange?.(event.target.value);
                setSelected(event.target.value);
              }}
            />
          </StyledItem>
        ))}
      </StyledRadioContainer>
    </>
  );
}
export default RadioButtons;
