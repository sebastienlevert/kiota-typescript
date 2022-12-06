import {ConnectedOrganizationState} from './connectedOrganizationState';
import {DirectoryObject, Entity, IdentitySource} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ConnectedOrganization extends Entity, Partial<Parsable> {
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    createdDateTime?: Date;
    /** The description of the connected organization. */
    description?: string;
    /** The display name of the connected organization. Supports $filter (eq). */
    displayName?: string;
    /** The externalSponsors property */
    externalSponsors?: DirectoryObject[];
    /** The identity sources in this connected organization, one of azureActiveDirectoryTenant, domainIdentitySource or externalDomainFederation. Nullable. */
    identitySources?: IdentitySource[];
    /** The internalSponsors property */
    internalSponsors?: DirectoryObject[];
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    modifiedDateTime?: Date;
    /** The state of a connected organization defines whether assignment policies with requestor scope type AllConfiguredConnectedOrganizationSubjects are applicable or not.  The possible values are: configured, proposed, unknownFutureValue. */
    state?: ConnectedOrganizationState;
}
