import {ChangeTrackedEntity, TimeOffItem} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TimeOff extends ChangeTrackedEntity, Partial<Parsable> {
    /** The draft version of this timeOff that is viewable by managers. Required. */
    draftTimeOff?: TimeOffItem;
    /** The shared version of this timeOff that is viewable by both employees and managers. Required. */
    sharedTimeOff?: TimeOffItem;
    /** ID of the user assigned to the timeOff. Required. */
    userId?: string;
}
