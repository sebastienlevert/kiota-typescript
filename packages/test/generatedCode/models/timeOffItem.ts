import {ScheduleEntity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TimeOffItem extends Partial<Parsable>, ScheduleEntity {
    /** ID of the timeOffReason for this timeOffItem. Required. */
    timeOffReasonId?: string;
}
