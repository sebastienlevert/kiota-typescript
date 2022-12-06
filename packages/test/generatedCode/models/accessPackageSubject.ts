import {AccessPackageSubjectType} from './accessPackageSubjectType';
import {ConnectedOrganization, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageSubject extends Entity, Partial<Parsable> {
    /** The connected organization of the subject. Read-only. Nullable. */
    connectedOrganization?: ConnectedOrganization;
    /** The display name of the subject. */
    displayName?: string;
    /** The email address of the subject. */
    email?: string;
    /** The object identifier of the subject. null if the subject is not yet a user in the tenant. */
    objectId?: string;
    /** A string representation of the principal's security identifier, if known, or null if the subject does not have a security identifier. */
    onPremisesSecurityIdentifier?: string;
    /** The principal name, if known, of the subject. */
    principalName?: string;
    /** The resource type of the subject. The possible values are: notSpecified, user, servicePrincipal, unknownFutureValue. */
    subjectType?: AccessPackageSubjectType;
}
