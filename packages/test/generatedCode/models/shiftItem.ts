import {ScheduleEntity, ShiftActivity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ShiftItem extends Partial<Parsable>, ScheduleEntity {
    /** An incremental part of a shift which can cover details of when and where an employee is during their shift. For example, an assignment or a scheduled break or lunch. Required. */
    activities?: ShiftActivity[];
    /** The shift label of the shiftItem. */
    displayName?: string;
    /** The shift notes for the shiftItem. */
    notes?: string;
}
