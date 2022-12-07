import {ConfirmedBy} from './confirmedBy';
import {ChangeTrackedEntity, ItemBody, TimeCardBreak, TimeCardEntry, TimeCardEvent} from './index';
import {TimeCardState} from './timeCardState';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TimeCard extends ChangeTrackedEntity, Partial<Parsable> {
    /** The list of breaks associated with the timeCard. */
    breaks?: TimeCardBreak[];
    /** The clockInEvent property */
    clockInEvent?: TimeCardEvent;
    /** The clockOutEvent property */
    clockOutEvent?: TimeCardEvent;
    /** The confirmedBy property */
    confirmedBy?: ConfirmedBy;
    /** The notes property */
    notes?: ItemBody;
    /** The originalEntry property */
    originalEntry?: TimeCardEntry;
    /** The state property */
    state?: TimeCardState;
    /** User ID to which  the timeCard belongs. */
    userId?: string;
}
