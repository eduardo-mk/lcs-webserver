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
