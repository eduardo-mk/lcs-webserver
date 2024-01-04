import { gql } from '@apollo/client';

export const getAvailablePlans = gql`
  query ($limit: Int!, $offset: Int!) {
    plans(limit: $limit, offset: $offset) {
      items {
        id
        name
        duration_in_min
        details
        description
        price
        currency
      }
    }
  }
`;

export const getCalendarDaysForAppt = gql`
  query GetCalendarDaysForAppt {
    availableAppointments {
      days
    }
  }
`;

export const getCalendarAvailableHours = gql`
  query ($daySelected: String!, $timeZone: String!) {
    availableAppointmentsHours(daySelected: $daySelected, timeZone: $timeZone) {
      hours
    }
  }
`;

export const SCHEDULE_APPOINTMENT = gql`
  mutation ScheduleAppointment($data: ScheduleAppointmentArgs!) {
    scheduleAppointment(data: $data) {
      msg
    }
  }
`;
