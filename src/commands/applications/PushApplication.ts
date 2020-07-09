import {Variant} from '../variants/Variant';

export interface PushApplication {
  pushApplicationID: string;
  name: string;
  description?: string;
  developer: string;

  variants?: Variant[];
  metadata?: {
    activity: number;
    deviceCount: number;
  };
}

export interface PushApplicationFilter {
  pushApplicationID?: string;
  name?: string;
  description?: string;
  developer?: string;
  page?: number;
}

export interface PushApplicationDefinition {
  name?: string;
  description?: string;
  developer?: string;
}
