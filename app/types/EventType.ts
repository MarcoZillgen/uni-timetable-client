import { COLORS } from '../constants/Colors';

export type EventType = {
  Title: string;
  StartTime: number;
  EndTime: number;
  Color: keyof typeof COLORS;
  EventType: string; // for example: lecture, tutorial
  Day: string;
  Place: string;
};