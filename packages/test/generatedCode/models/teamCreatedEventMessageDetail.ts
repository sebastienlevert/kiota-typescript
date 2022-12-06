import {EventMessageDetail, IdentitySet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamCreatedEventMessageDetail extends EventMessageDetail, Partial<Parsable> {
    /** Initiator of the event. */
    initiator?: IdentitySet;
    /** Description for the team. */
    teamDescription?: string;
    /** Display name of the team. */
    teamDisplayName?: string;
    /** Unique identifier of the team. */
    teamId?: string;
}
