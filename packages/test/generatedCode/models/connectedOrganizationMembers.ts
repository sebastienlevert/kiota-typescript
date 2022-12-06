import {SubjectSet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ConnectedOrganizationMembers extends Partial<Parsable>, SubjectSet {
    /** The ID of the connected organization in entitlement management. */
    connectedOrganizationId?: string;
    /** The name of the connected organization. */
    description?: string;
}
