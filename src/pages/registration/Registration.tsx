import FlexBox from 'components/flexbox/FlexBox';
import { FormEvent, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../../components/container/Container';
import InputBox from '../../components/inputBox/InputBox';
import RadioButtons from '../../components/radioButtons/RadioButtons';
import TextArea from '../../components/textArea/TextArea';
import Button from '../../components/button/Button';
import useForm from '../../hooks/useForm/useForm';
import ValidationBox from '../../components/validationBox/ValidationBox';
import { submitUserInfo } from '../../services/beeceptorService/beeceptorService';
import Typography from '../../components/typography/Typography';
import validations from './validations';
import calculateAge from '../../helpers/calculateAge/calculateAge';

function Registration() {
  const navigate = useNavigate();
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
    validations
  );

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAllFocus();
    if (isSubmittable) {
      submitUserInfo({
        id: 1,
        firstName: values.firstName,
        lastName: values.lastName,
        dob: new Date(values.dob),
        address: values.address,
        locality: values.locality,
        noOfGuest: values.noOfGuest as unknown as 1 | 2,
        profession: values.profession as 'Student' | 'Employed',
        age: 18,
      }).then(() => navigate('/home'));
    }
  };

  const userAge = useMemo(() => {
    if (values.dob) {
      return calculateAge(values.dob);
    }
    return '';
  }, [values.dob]);

  // const handleBeforeUnload = (e: BeforeUnloadEvent) => {
  //   e.preventDefault();
  //   const message =
  //     'Are you sure you want to leave? All provided data will be lost.';
  //   e.returnValue = message;
  //   return message;
  // };
  //
  // useEffect(() => {
  //   window.addEventListener('beforeunload', handleBeforeUnload);
  //   return () => {
  //     window.removeEventListener('beforeunload', handleBeforeUnload);
  //   };
  // }, []);

  return (
    <FlexBox display="flex" direction="column" isFullHeight>
      <Container>
        <Typography variant="h1" align="center" margin={[10, 0, 0, 0]}>
          Registration
        </Typography>
        <Typography
          variant="h4"
          align="center"
          margin={[10, 0, 10, 0]}
          color="textColor2"
        >
          This info will help us to arrange hospitality.
        </Typography>
      </Container>

      <FlexBox display="flex" direction="column" flexGrow={2}>
        <Container
          borderRadius={[30, 30, 0, 0]}
          backgroundColor="secondaryBackground"
          height="100%"
          padding="30px"
        >
          <form onSubmit={submitForm}>
            <ValidationBox error={validationErrors.firstName}>
              <InputBox
                data-testid="firstNameInput"
                label="First name"
                value={values.firstName}
                onChange={setValue('firstName')}
                onBlur={setFocus('firstName')}
              />
            </ValidationBox>
            <ValidationBox error={validationErrors.lastName}>
              <InputBox
                data-testid="lastNameInput"
                label="Last name"
                value={values.lastName}
                onChange={setValue('lastName')}
                onBlur={setFocus('lastName')}
              />
            </ValidationBox>
            <ValidationBox error={validationErrors.dob}>
              <FlexBox display="flex">
                <FlexBox display="flex" direction="column" flexGrow={2}>
                  <InputBox
                    type="date"
                    data-testid="dobInput"
                    label="Date of birth"
                    value={values.dob}
                    onChange={setValue('dob')}
                  />
                </FlexBox>
                <FlexBox width="20px" />
                <FlexBox
                  display="flex"
                  direction="column"
                  flexGrow={1}
                  width="200px"
                >
                  <InputBox label="Age" value={userAge} readOnly />
                </FlexBox>
              </FlexBox>
            </ValidationBox>

            <ValidationBox error={validationErrors.profession}>
              <RadioButtons
                label="Profession"
                possibleValues={['Employed', 'Student']}
                value={values.profession}
                onChange={setValue('profession')}
              />
            </ValidationBox>
            <ValidationBox error={validationErrors.locality}>
              <InputBox
                data-testid="localityInput"
                label="Locality"
                value={values.locality}
                onChange={setValue('locality')}
              />
            </ValidationBox>
            <ValidationBox error={validationErrors.noOfGuest}>
              <RadioButtons
                label="No of guests"
                possibleValues={['1', '2']}
                onChange={setValue('noOfGuest')}
                value={values.noOfGuest}
              />
            </ValidationBox>
            <ValidationBox error={validationErrors.address}>
              <TextArea
                label="Address"
                data-testid="addressInput"
                value={values.address}
                onChange={setValue('address')}
              />
            </ValidationBox>

            <Button data-testid="submitButton">Submit</Button>
          </form>
        </Container>
      </FlexBox>
    </FlexBox>
  );
}
export default Registration;
