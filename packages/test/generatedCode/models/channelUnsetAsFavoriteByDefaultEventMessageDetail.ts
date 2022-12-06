import {EventMessageDetail, IdentitySet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ChannelUnsetAsFavoriteByDefaultEventMessageDetail extends EventMessageDetail, Partial<Parsable> {
    /** Unique identifier of the channel. */
    channelId?: string;
    /** Initiator of the event. */
    initiator?: IdentitySet;
}
