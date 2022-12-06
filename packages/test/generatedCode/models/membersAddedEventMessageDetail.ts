import {EventMessageDetail, IdentitySet, TeamworkUserIdentity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MembersAddedEventMessageDetail extends EventMessageDetail, Partial<Parsable> {
    /** Initiator of the event. */
    initiator?: IdentitySet;
    /** List of members added. */
    members?: TeamworkUserIdentity[];
    /** The timestamp that denotes how far back a conversation's history is shared with the conversation members. */
    visibleHistoryStartDateTime?: Date;
}
