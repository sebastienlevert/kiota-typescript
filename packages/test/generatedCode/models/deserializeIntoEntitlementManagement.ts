import {deserializeIntoAccessPackage} from './deserializeIntoAccessPackage';
import {deserializeIntoAccessPackageAssignment} from './deserializeIntoAccessPackageAssignment';
import {deserializeIntoAccessPackageAssignmentPolicy} from './deserializeIntoAccessPackageAssignmentPolicy';
import {deserializeIntoAccessPackageAssignmentRequest} from './deserializeIntoAccessPackageAssignmentRequest';
import {deserializeIntoAccessPackageCatalog} from './deserializeIntoAccessPackageCatalog';
import {deserializeIntoApproval} from './deserializeIntoApproval';
import {deserializeIntoConnectedOrganization} from './deserializeIntoConnectedOrganization';
import {deserializeIntoEntitlementManagementSettings} from './deserializeIntoEntitlementManagementSettings';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {EntitlementManagement} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEntitlementManagement(entitlementManagement: EntitlementManagement | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(entitlementManagement),
        "accessPackageAssignmentApprovals": n => { entitlementManagement.accessPackageAssignmentApprovals = n.getCollectionOfObjectValuesFromMethod(deserializeIntoApproval) as any ; },
        "accessPackages": n => { entitlementManagement.accessPackages = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessPackage) as any ; },
        "assignmentPolicies": n => { entitlementManagement.assignmentPolicies = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessPackageAssignmentPolicy) as any ; },
        "assignmentRequests": n => { entitlementManagement.assignmentRequests = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessPackageAssignmentRequest) as any ; },
        "assignments": n => { entitlementManagement.assignments = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessPackageAssignment) as any ; },
        "catalogs": n => { entitlementManagement.catalogs = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessPackageCatalog) as any ; },
        "connectedOrganizations": n => { entitlementManagement.connectedOrganizations = n.getCollectionOfObjectValuesFromMethod(deserializeIntoConnectedOrganization) as any ; },
        "settings": n => { entitlementManagement.settings = n.getObject(deserializeIntoEntitlementManagementSettings) as any ; },
    }
}
