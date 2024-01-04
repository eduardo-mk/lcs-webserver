import { Dispatch } from 'react';
import { UserData } from '../interfaces/payment';

export const formatDate = (date: Date) => {
  let year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, '0');
  let day = date.getDate().toString().padStart(2, '0');

  return year + '-' + month + '-' + day;
};

export const debounce = (cb: Function, timeout: number) => {
  let timeoutId: NodeJS.Timeout | null = null;
  return (...args: any) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => cb(...args), timeout);
  };
};

export const validateLastName = (value: number): boolean => {
  return value > 1;
};

export const validateFirstName = (value: number): boolean => {
  return value > 1;
};

export const validateEmail = (email: string): boolean => {
  return /\S+@\S+\.\S+/.test(email);
};

export const validateEntireForm = (
  userData: UserData,
  dispatch: Dispatch<any>
) => {
  const firstNameIsValid = validateFirstName(userData.firstName.length);
  const lastNameIsValid = validateLastName(userData.lastName.length);
  const emailIsValid = validateEmail(userData.email);
  const userDataIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

  dispatch({ type: 'user_data/validation', payload: userDataIsValid });
  return userDataIsValid;
};

export const formatCurrency = (
  value: string | number,
  minimumFractionDigits: number = 2,
  maximumFractionDigits: number = 2
): string => {
  console.log(value);
  // Check if the input is a string or number
  if (typeof value === 'string') {
    // Remove non-numeric characters from the string
    const numericString: string = value.replace(/[^0-9.]/g, '');

    // Convert the cleaned string to a number
    const numberValue: number = parseFloat(numericString);

    // Check if the conversion is successful
    if (isNaN(numberValue)) {
      console.error('Invalid input. Please provide a valid numeric string.');
      return value;
    }

    // Assign the number value for further processing
    value = numberValue;
  } else if (typeof value !== 'number') {
    console.error(
      'Invalid input. Please provide a string or number representing a valid amount.'
    );
    return value;
  }

  // Round the number to two decimal places
  const roundedNumber: number = Number(value.toFixed(2));

  // Format the number as currency with "$" symbol
  const formattedCurrency: string = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(roundedNumber);

  return formattedCurrency;
};
