import {EventMessageDetail, IdentitySet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsAppRemovedEventMessageDetail extends EventMessageDetail, Partial<Parsable> {
    /** Initiator of the event. */
    initiator?: IdentitySet;
    /** Display name of the teamsApp. */
    teamsAppDisplayName?: string;
    /** Unique identifier of the teamsApp. */
    teamsAppId?: string;
}
