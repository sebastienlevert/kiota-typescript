import {ChangeTrackedEntity, ShiftItem} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Shift extends ChangeTrackedEntity, Partial<Parsable> {
    /** The draft version of this shift that is viewable by managers. Required. */
    draftShift?: ShiftItem;
    /** ID of the scheduling group the shift is part of. Required. */
    schedulingGroupId?: string;
    /** The shared version of this shift that is viewable by both employees and managers. Required. */
    sharedShift?: ShiftItem;
    /** ID of the user assigned to the shift. Required. */
    userId?: string;
}
