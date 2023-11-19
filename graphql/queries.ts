import { gql } from '@apollo/client';

export const getAvailablePlans = gql`
  query GetAvailablePlans {
    plans {
      items {
        id
        name
        metadata {
          duration_in_min
          more_details
        }
        description
        default_price
        currency
        active
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
  query ($daySelected: String!) {
    availableAppointmentsHours(daySelected: $daySelected) {
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
