import {EntitlementManagement} from './index';
import {serializeAccessPackage} from './serializeAccessPackage';
import {serializeAccessPackageAssignment} from './serializeAccessPackageAssignment';
import {serializeAccessPackageAssignmentPolicy} from './serializeAccessPackageAssignmentPolicy';
import {serializeAccessPackageAssignmentRequest} from './serializeAccessPackageAssignmentRequest';
import {serializeAccessPackageCatalog} from './serializeAccessPackageCatalog';
import {serializeApproval} from './serializeApproval';
import {serializeConnectedOrganization} from './serializeConnectedOrganization';
import {serializeEntitlementManagementSettings} from './serializeEntitlementManagementSettings';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEntitlementManagement(writer: SerializationWriter, entitlementManagement: EntitlementManagement | undefined = {}) : void {
        serializeEntity(writer, entitlementManagement)
            writer.writeCollectionOfObjectValuesFromMethod("accessPackageAssignmentApprovals", entitlementManagement.accessPackageAssignmentApprovals as any, serializeApproval);
            writer.writeCollectionOfObjectValuesFromMethod("accessPackages", entitlementManagement.accessPackages as any, serializeAccessPackage);
            writer.writeCollectionOfObjectValuesFromMethod("assignmentPolicies", entitlementManagement.assignmentPolicies as any, serializeAccessPackageAssignmentPolicy);
            writer.writeCollectionOfObjectValuesFromMethod("assignmentRequests", entitlementManagement.assignmentRequests as any, serializeAccessPackageAssignmentRequest);
            writer.writeCollectionOfObjectValuesFromMethod("assignments", entitlementManagement.assignments as any, serializeAccessPackageAssignment);
            writer.writeCollectionOfObjectValuesFromMethod("catalogs", entitlementManagement.catalogs as any, serializeAccessPackageCatalog);
            writer.writeCollectionOfObjectValuesFromMethod("connectedOrganizations", entitlementManagement.connectedOrganizations as any, serializeConnectedOrganization);
            writer.writeObjectValueFromMethod("settings", entitlementManagement.settings as any, serializeEntitlementManagementSettings);
}
