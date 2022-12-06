import {EventMessageDetail, IdentitySet, TeamworkUserIdentity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MembersDeletedEventMessageDetail extends EventMessageDetail, Partial<Parsable> {
    /** Initiator of the event. */
    initiator?: IdentitySet;
    /** List of members deleted. */
    members?: TeamworkUserIdentity[];
}
