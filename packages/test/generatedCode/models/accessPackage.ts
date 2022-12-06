import {AccessPackageAssignmentPolicy, AccessPackageCatalog, Entity, Group} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackage extends Entity, Partial<Parsable> {
    /** The access packages that are incompatible with this package. Read-only. */
    accessPackagesIncompatibleWith?: AccessPackage[];
    /** The assignmentPolicies property */
    assignmentPolicies?: AccessPackageAssignmentPolicy[];
    /** The catalog property */
    catalog?: AccessPackageCatalog;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    createdDateTime?: Date;
    /** The description of the access package. */
    description?: string;
    /** The display name of the access package. Supports $filter (eq, contains). */
    displayName?: string;
    /** The access packages whose assigned users are ineligible to be assigned this access package. */
    incompatibleAccessPackages?: AccessPackage[];
    /** The groups whose members are ineligible to be assigned this access package. */
    incompatibleGroups?: Group[];
    /** Whether the access package is hidden from the requestor. */
    isHidden?: boolean;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    modifiedDateTime?: Date;
}
