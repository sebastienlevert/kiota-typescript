import {AllowedTargetScope} from './allowedTargetScope';
import {AccessPackage, AccessPackageAssignmentApprovalSettings, AccessPackageAssignmentRequestorSettings, AccessPackageAssignmentReviewSettings, AccessPackageAutomaticRequestSettings, AccessPackageCatalog, Entity, ExpirationPattern, SubjectSet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageAssignmentPolicy extends Entity, Partial<Parsable> {
    /** Access package containing this policy. Read-only. */
    accessPackage?: AccessPackage;
    /** Principals that can be assigned the access package through this policy. The possible values are: notSpecified, specificDirectoryUsers, specificConnectedOrganizationUsers, specificDirectoryServicePrincipals, allMemberUsers, allDirectoryUsers, allDirectoryServicePrincipals, allConfiguredConnectedOrganizationUsers, allExternalUsers, unknownFutureValue. */
    allowedTargetScope?: AllowedTargetScope;
    /** This property is only present for an auto assignment policy; if absent, this is a request-based policy. */
    automaticRequestSettings?: AccessPackageAutomaticRequestSettings;
    /** Catalog of the access package containing this policy. Read-only. */
    catalog?: AccessPackageCatalog;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    createdDateTime?: Date;
    /** The description of the policy. */
    description?: string;
    /** The display name of the policy. */
    displayName?: string;
    /** The expiration date for assignments created in this policy. */
    expiration?: ExpirationPattern;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    modifiedDateTime?: Date;
    /** Specifies the settings for approval of requests for an access package assignment through this policy. For example, if approval is required for new requests. */
    requestApprovalSettings?: AccessPackageAssignmentApprovalSettings;
    /** Provides additional settings to select who can create a request for an access package assignment through this policy, and what they can include in their request. */
    requestorSettings?: AccessPackageAssignmentRequestorSettings;
    /** Settings for access reviews of assignments through this policy. */
    reviewSettings?: AccessPackageAssignmentReviewSettings;
    /** The principals that can be assigned access from an access package through this policy. */
    specificAllowedTargets?: SubjectSet[];
}
