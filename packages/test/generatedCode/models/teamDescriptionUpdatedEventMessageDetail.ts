import {EventMessageDetail, IdentitySet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamDescriptionUpdatedEventMessageDetail extends EventMessageDetail, Partial<Parsable> {
    /** Initiator of the event. */
    initiator?: IdentitySet;
    /** The updated description for the team. */
    teamDescription?: string;
    /** Unique identifier of the team. */
    teamId?: string;
}
