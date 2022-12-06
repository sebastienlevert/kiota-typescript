import {EventMessageDetail, IdentitySet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MessageUnpinnedEventMessageDetail extends EventMessageDetail, Partial<Parsable> {
    /** Date and time when the event occurred. */
    eventDateTime?: Date;
    /** Initiator of the event. */
    initiator?: IdentitySet;
}
