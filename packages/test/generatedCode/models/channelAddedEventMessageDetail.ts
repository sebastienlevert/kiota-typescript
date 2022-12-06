import {EventMessageDetail, IdentitySet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ChannelAddedEventMessageDetail extends EventMessageDetail, Partial<Parsable> {
    /** Display name of the channel. */
    channelDisplayName?: string;
    /** Unique identifier of the channel. */
    channelId?: string;
    /** Initiator of the event. */
    initiator?: IdentitySet;
}
