import {EventMessageDetail, IdentitySet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ChannelDescriptionUpdatedEventMessageDetail extends EventMessageDetail, Partial<Parsable> {
    /** The updated description of the channel. */
    channelDescription?: string;
    /** Unique identifier of the channel. */
    channelId?: string;
    /** Initiator of the event. */
    initiator?: IdentitySet;
}
