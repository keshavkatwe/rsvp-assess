const validations = {
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
  dob: {
    rules: {
      isRequired: true,
    },
    messages: {
      isRequired: 'Please select date of birth',
    },
  },
  profession: {
    rules: {
      isRequired: true,
    },
    messages: {
      isRequired: 'Please select profession',
    },
  },
  locality: {
    rules: {
      isRequired: true,
    },
    messages: {
      isRequired: 'Please enter locality',
    },
  },
  noOfGuest: {
    rules: {
      isRequired: true,
    },
    messages: {
      isRequired: 'Please select no of guests',
    },
  },
  address: {
    rules: {
      isRequired: true,
    },
    messages: {
      isRequired: 'Please enter address',
    },
  },
};

export default validations;
