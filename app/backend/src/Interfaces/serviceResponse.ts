export type serviceResponseMessage = { message: string };

type serviceResponseTypeError = 'NOT_FOUND' | 'INVALID_DATA' | 'CONFLICT' | 'UNAUTHORIZED';

export type ServiceResponseError = {
  status: serviceResponseTypeError;
  data: serviceResponseMessage;
};

export type ServiceResponseSuccess<T> = {
  status: 'SUCCESS',
  data: T
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;
