import FlexBox from 'components/flexbox/FlexBox';
import { FormEvent, useEffect } from 'react';
import Container from '../../components/container/Container';
import InputBox from '../../components/inputBox/InputBox';
import RadioButtons from '../../components/radioButtons/RadioButtons';
import TextArea from '../../components/textArea/TextArea';
import Button from '../../components/button/Button';
import useForm from '../../libs/useForm/useForm';
import ValidationBox from '../../components/validationBox/ValidationBox';
import { submitUserInfo } from '../../services/beeceptorService/beeceptorService';

function Registration() {
  const {
    values,
    setValue,
    validationErrors,
    setFocus,
    isSubmittable,
    setAllFocus,
  } = useForm(
    {
      firstName: '',
      lastName: '',
      dob: '',
      profession: '',
      locality: '',
      noOfGuest: '',
      address: '',
    },
    {
      firstName: {
        rules: {
          isRequired: true,
        },
        messages: {
          isRequired: 'Please enter first name',
        },
      },
      lastName: {
        rules: {
          isRequired: true,
        },
        messages: {
          isRequired: 'Please enter last name',
        },
      },
    }
  );

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAllFocus();
    if (isSubmittable) {
      submitUserInfo({
        firstName: values.firstName,
        lastName: values.lastName,
        dob: new Date(),
        address: values.address,
        locality: values.locality,
        noOfGuest: +values.noOfGuest,
        profession: values.profession,
      });
    }
  };

  const handleBeforeUnload = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    const message =
      'Are you sure you want to leave? All provided data will be lost.';
    e.returnValue = message;
    return message;
  };

  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <FlexBox display="flex" direction="column" isFullHeight>
      <Container>
        <h1>Hello</h1>
        <h2>World</h2>
      </Container>

      <FlexBox display="flex" direction="column" flexGrow={2}>
        <Container
          borderRadius={[30, 30, 0, 0]}
          backgroundColor="secondaryBackground"
          height="100%"
        >
          <form onSubmit={submitForm}>
            <ValidationBox error={validationErrors.firstName}>
              <InputBox
                data-testid="firstNameInput"
                placeholder="First name"
                value={values.firstName}
                onChange={setValue('firstName')}
                onBlur={setFocus('firstName')}
              />
            </ValidationBox>
            <ValidationBox error={validationErrors.lastName}>
              <InputBox
                data-testid="lastNameInput"
                placeholder="Last name"
                value={values.lastName}
                onChange={setValue('lastName')}
                onBlur={setFocus('lastName')}
              />
            </ValidationBox>
            <InputBox
              data-testid="dobInput"
              placeholder="Date of birth"
              value={values.dob}
              onChange={setValue('dob')}
            />
            <InputBox placeholder="Age" />
            <RadioButtons
              possibleValues={['Employed', 'Student']}
              value={values.profession}
              onChange={setValue('profession')}
            />
            <InputBox
              data-testid="localityInput"
              placeholder="Locality"
              value={values.locality}
              onChange={setValue('locality')}
            />
            <RadioButtons
              possibleValues={['1', '2']}
              onChange={setValue('noOfGuest')}
              value={values.noOfGuest}
            />
            <TextArea
              data-testid="addressInput"
              value={values.address}
              onChange={setValue('address')}
            />

            <Button data-testid="submitButton">Submit</Button>
          </form>
        </Container>
      </FlexBox>
    </FlexBox>
  );
}
export default Registration;
