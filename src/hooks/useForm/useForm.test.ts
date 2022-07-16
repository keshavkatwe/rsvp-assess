import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import useForm from './useForm';

describe('should test useForm', () => {
  it('should test simple case', () => {
    const { result } = renderHook(() =>
      useForm(
        {
          firstName: '',
          age: 0,
          profession: '',
        },
        {
          firstName: {
            rules: {
              isRequired: true,
            },
            messages: {
              isRequired: 'Please enter firstname',
            },
          },
        }
      )
    );

    expect(result.current.isSubmittable).toBeFalsy();
    expect(result.current.validationErrors.firstName).toBeUndefined();
    act(() => {
      result.current.setFocus('firstName')();
    });

    expect(result.current.validationErrors.firstName).toEqual(
      'Please enter firstname'
    );
    act(() => {
      result.current.setValue('firstName')('John Doe');
      result.current.setValue('age')(20);
      result.current.setValue('profession')({
        // @ts-ignore
        target: {
          value: 'Lorem',
        },
      });
    });
    expect(result.current.validationErrors.firstName).toEqual('');
    expect(result.current.isSubmittable).toBeTruthy();
  });

  it('should test set all focus', () => {
    const { result } = renderHook(() =>
      useForm(
        {
          firstName: '',
        },
        {
          firstName: {
            rules: {
              isRequired: true,
            },
            messages: {},
          },
        }
      )
    );

    expect(result.current.validationErrors.firstName).toBeUndefined();
    act(() => {
      result.current.setAllFocus();
    });

    expect(result.current.validationErrors.firstName).toEqual(
      'This is required'
    );
  });
});
