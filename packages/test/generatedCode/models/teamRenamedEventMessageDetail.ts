import {EventMessageDetail, IdentitySet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamRenamedEventMessageDetail extends EventMessageDetail, Partial<Parsable> {
    /** Initiator of the event. */
    initiator?: IdentitySet;
    /** The updated name of the team. */
    teamDisplayName?: string;
    /** Unique identifier of the team. */
    teamId?: string;
}
