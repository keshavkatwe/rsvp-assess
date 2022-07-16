import { Fragment, useState } from 'react';

type IRadioVal = string;

interface IRadioButtonsProps {
  possibleValues: string[];
  onChange?: (val: IRadioVal) => void;
  value?: IRadioVal;
}
function RadioButtons({ possibleValues, onChange, value }: IRadioButtonsProps) {
  const [selected, setSelected] = useState(value);

  return (
    <>
      {possibleValues.map((val) => (
        <Fragment key={val}>
          <label htmlFor={`radio_button_${val}`}>{val}</label>
          <input
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
        </Fragment>
      ))}
    </>
  );
}
export default RadioButtons;
