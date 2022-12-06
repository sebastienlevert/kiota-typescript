import {EventMessageDetail, IdentitySet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ChannelRenamedEventMessageDetail extends EventMessageDetail, Partial<Parsable> {
    /** The updated name of the channel. */
    channelDisplayName?: string;
    /** Unique identifier of the channel. */
    channelId?: string;
    /** Initiator of the event. */
    initiator?: IdentitySet;
}
