export interface SearchFormDataProps {
  city: string;
  country: string;
}

export interface SearchResultsProps {
  id: number;
  city: string;
  country: string;
  weather: string;
  description: string;
  icon: string;
  temp_max: number;
  temp_min: number;
  humidity: number;
  date_of_request: Date;
}

export enum MessageTypes {
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
  DEFAULT = 'DEFAULT',
}

export interface CustomMessageProps {
  message: string | undefined;
  type: MessageTypes;
}
