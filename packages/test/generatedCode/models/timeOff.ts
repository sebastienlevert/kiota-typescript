import {ChangeTrackedEntity, TimeOffItem} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TimeOff extends ChangeTrackedEntity, Partial<Parsable> {
    /** The draftTimeOff property */
    draftTimeOff?: TimeOffItem;
    /** The isStagedForDeletion property */
    isStagedForDeletion?: boolean;
    /** The sharedTimeOff property */
    sharedTimeOff?: TimeOffItem;
    /** ID of the user assigned to the timeOff. Required. */
    userId?: string;
}
