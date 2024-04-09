import { render, screen } from '@testing-library/react';
import App from './App';
import Booking from './components/Booking';
import { submitAPI } from './utils/temp';


test('submitAPI returns true', () => {
  const formData = {
    date: '2022-10-12',
    time: '20:00',
    guests: '5',
    occasion: 'Birthday',
  };
  const result = submitAPI(formData);
  expect(result).toBe(true);
});