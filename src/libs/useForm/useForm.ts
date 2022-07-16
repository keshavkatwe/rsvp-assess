import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { IValidation, IValueBoolean, IValueMessage } from './types';

function useForm<Values extends Record<string, unknown>>(
  initialValues: Values,
  validation: IValidation<Values>
) {
  const [formValues, setFormValues] = useState(initialValues);
  const [touchList, setTouchList] = useState<IValueBoolean<Values>>({});
  const [errorList, setErrorList] = useState<IValueMessage<Values>>({});
  const [isFirstLoad, setFirstLoad] = useState(true);

  const validationErrors = useMemo(() => {
    const newValidationErrors: IValueMessage<Values> = {};
    (Object.keys(errorList) as Array<keyof typeof errorList>).forEach(
      (fieldName) => {
        if (touchList[fieldName]) {
          newValidationErrors[fieldName] = errorList[fieldName];
        }
      }
    );

    return newValidationErrors;
  }, [errorList, touchList]);

  const isSubmittable = useMemo(
    () =>
      (Object.keys(errorList) as Array<keyof typeof errorList>).filter(
        (fieldName) => !!errorList[fieldName]?.length
      ).length === 0,
    [errorList]
  );

  const validate = useCallback(
    (fieldName: keyof Values, fieldValue = formValues[fieldName]) => {
      const validationSchema = validation[fieldName];
      let fieldError = '';
      if (validationSchema) {
        (
          Object.keys(validationSchema.rules) as Array<
            keyof typeof validationSchema.rules
          >
        ).forEach((rule) => {
          if (fieldError === '') {
            if (rule === 'isRequired') {
              if (!fieldValue) {
                fieldError =
                  validationSchema.messages[rule] || 'This is required';
              }
            }
          }
        });

        setErrorList((preVal) => ({
          ...preVal,
          [fieldName]: fieldError,
        }));
      }
    },
    [formValues, validation]
  );

  useEffect(() => {
    if (isFirstLoad) {
      setFirstLoad(false);

      (Object.keys(validation) as Array<keyof typeof validation>).forEach(
        (value) => {
          validate(value);
        }
      );
    }
  }, [isFirstLoad, validate, validation]);

  const setValue =
    (fieldName: keyof Values) =>
    (
      event:
        | ChangeEvent<HTMLInputElement>
        | ChangeEvent<HTMLTextAreaElement>
        | string
        | number
    ) => {
      let finalVal: string | number = '';
      if (typeof event === 'string' || typeof event === 'number') {
        finalVal = event;
      } else if (event?.target?.value) {
        finalVal = event.target.value;
      }
      setFormValues((preVal) => ({
        ...preVal,
        [fieldName]: finalVal,
      }));

      validate(fieldName, finalVal as Values[keyof Values]);
    };

  const setFocus = (fieldName: keyof Values) => () => {
    setTouchList((prepVal) => ({
      ...prepVal,
      [fieldName]: true,
    }));
  };

  const setAllFocus = () => {
    (Object.keys(validation) as Array<keyof typeof validation>).forEach(
      (value) => {
        setFocus(value)();
      }
    );
  };
  return {
    values: formValues,
    setValue,
    setFocus,
    validationErrors,
    isSubmittable,
    setAllFocus,
  };
}
export default useForm;
