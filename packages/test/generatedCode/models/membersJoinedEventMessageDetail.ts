import {EventMessageDetail, IdentitySet, TeamworkUserIdentity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MembersJoinedEventMessageDetail extends EventMessageDetail, Partial<Parsable> {
    /** Initiator of the event. */
    initiator?: IdentitySet;
    /** List of members who joined the chat. */
    members?: TeamworkUserIdentity[];
}
