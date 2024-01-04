import { useMutation, useQuery } from '@apollo/client';
import {
  getAvailablePlans,
  getCalendarAvailableHours,
  getCalendarDaysForAppt,
  SCHEDULE_APPOINTMENT,
} from './queries';
import * as GraphQL from './codegen_auto_generated';
// import { ScheduleAppointmentArgs, Service } from './codegen_auto_generated';

interface UsePlanResult {
  plans: GraphQL.Service[];
  loading: boolean;
  error: boolean;
}

interface UseCalendarAvailableDays_Result {
  days: string[];
  loading: boolean;
  error: boolean;
}

export function usePlans(limit: number, offset: number): UsePlanResult {
  console.log('USE PLANS\n\n\n', limit, offset);
  const result = useQuery(getAvailablePlans, {
    fetchPolicy: 'network-only',
    variables: {
      limit,
      offset,
    },
  });

  const { data, loading, error } = result;
  return { plans: data?.plans?.items, loading, error: Boolean(error) };
}

export function useCalendarAvailableDays(): UseCalendarAvailableDays_Result {
  const { data, loading, error } = useQuery(getCalendarDaysForAppt, {
    fetchPolicy: 'network-only',
  });

  return {
    days: data?.availableAppointments?.days,
    loading,
    error: Boolean(error),
  };
}

export function useCalendarAvailableHours(
  daySelected: Date | string,
  timeZone: string
) {
  console.log('Calculating the available hours graphql', daySelected, timeZone);
  const { data, loading, error } = useQuery(getCalendarAvailableHours, {
    fetchPolicy: 'network-only',
    variables: {
      daySelected,
      timeZone,
    },
  });
  const hours = data?.availableAppointmentsHours?.hours;
  return { hours, loading, error: Boolean(error) };
}

export function _useScheduleAppointment(args: GraphQL.ScheduleAppointmentArgs) {
  // const { loading, error } = useQuery(scheduleAppointment, {
  //   fetchPolicy: 'network-only',
  //   variables: {
  //     data
  //   },
  // });
  // return { loading, error: Boolean(error) };
}

export function useScheduleAppointment() {
  const [mutate, mutationStatus] = useMutation(SCHEDULE_APPOINTMENT);
  // mutate({
  //   variables: {
  //     data: args,
  //   },
  // });
  return { mutate, mutationStatus };
}
