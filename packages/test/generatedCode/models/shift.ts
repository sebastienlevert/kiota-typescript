import {ChangeTrackedEntity, ShiftItem} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Shift extends ChangeTrackedEntity, Partial<Parsable> {
    /** The draftShift property */
    draftShift?: ShiftItem;
    /** The isStagedForDeletion property */
    isStagedForDeletion?: boolean;
    /** The schedulingGroupId property */
    schedulingGroupId?: string;
    /** The sharedShift property */
    sharedShift?: ShiftItem;
    /** The userId property */
    userId?: string;
}
