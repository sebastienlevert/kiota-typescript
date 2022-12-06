import {AccessPackage, AccessPackageAssignment, AccessPackageAssignmentPolicy, AccessPackageAssignmentRequest, AccessPackageCatalog, Approval, ConnectedOrganization, EntitlementManagementSettings, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EntitlementManagement extends Entity, Partial<Parsable> {
    /** Approval stages for decisions associated with access package assignment requests. */
    accessPackageAssignmentApprovals?: Approval[];
    /** Access packages define the collection of resource roles and the policies for which subjects can request or be assigned access to those resources. */
    accessPackages?: AccessPackage[];
    /** Access package assignment policies govern which subjects can request or be assigned an access package via an access package assignment. */
    assignmentPolicies?: AccessPackageAssignmentPolicy[];
    /** Access package assignment requests created by or on behalf of a subject. */
    assignmentRequests?: AccessPackageAssignmentRequest[];
    /** The assignment of an access package to a subject for a period of time. */
    assignments?: AccessPackageAssignment[];
    /** A container for access packages. */
    catalogs?: AccessPackageCatalog[];
    /** References to a directory or domain of another organization whose users can request access. */
    connectedOrganizations?: ConnectedOrganization[];
    /** The settings that control the behavior of Azure AD entitlement management. */
    settings?: EntitlementManagementSettings;
}
