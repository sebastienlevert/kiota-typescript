import {EventMessageDetail, IdentitySet, TeamworkUserIdentity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MembersLeftEventMessageDetail extends EventMessageDetail, Partial<Parsable> {
    /** Initiator of the event. */
    initiator?: IdentitySet;
    /** List of members who left the chat. */
    members?: TeamworkUserIdentity[];
}
