import {Entity, Team} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamInfo extends Entity, Partial<Parsable> {
    /** The name of the team. */
    displayName?: string;
    /** The team property */
    team?: Team;
    /** The ID of the Azure Active Directory tenant. */
    tenantId?: string;
}
