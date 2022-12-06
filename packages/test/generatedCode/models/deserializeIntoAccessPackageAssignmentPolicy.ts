import {AllowedTargetScope} from './allowedTargetScope';
import {deserializeIntoAccessPackage} from './deserializeIntoAccessPackage';
import {deserializeIntoAccessPackageAssignmentApprovalSettings} from './deserializeIntoAccessPackageAssignmentApprovalSettings';
import {deserializeIntoAccessPackageAssignmentRequestorSettings} from './deserializeIntoAccessPackageAssignmentRequestorSettings';
import {deserializeIntoAccessPackageAssignmentReviewSettings} from './deserializeIntoAccessPackageAssignmentReviewSettings';
import {deserializeIntoAccessPackageAutomaticRequestSettings} from './deserializeIntoAccessPackageAutomaticRequestSettings';
import {deserializeIntoAccessPackageCatalog} from './deserializeIntoAccessPackageCatalog';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoExpirationPattern} from './deserializeIntoExpirationPattern';
import {deserializeIntoSubjectSet} from './deserializeIntoSubjectSet';
import {AccessPackageAssignmentPolicy} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageAssignmentPolicy(accessPackageAssignmentPolicy: AccessPackageAssignmentPolicy | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(accessPackageAssignmentPolicy),
        "accessPackage": n => { accessPackageAssignmentPolicy.accessPackage = n.getObject(deserializeIntoAccessPackage) as any ; },
        "allowedTargetScope": n => { accessPackageAssignmentPolicy.allowedTargetScope = n.getEnumValue<AllowedTargetScope>(AllowedTargetScope) as any ; },
        "automaticRequestSettings": n => { accessPackageAssignmentPolicy.automaticRequestSettings = n.getObject(deserializeIntoAccessPackageAutomaticRequestSettings) as any ; },
        "catalog": n => { accessPackageAssignmentPolicy.catalog = n.getObject(deserializeIntoAccessPackageCatalog) as any ; },
        "createdDateTime": n => { accessPackageAssignmentPolicy.createdDateTime = n.getDateValue() as any ; },
        "description": n => { accessPackageAssignmentPolicy.description = n.getStringValue() as any ; },
        "displayName": n => { accessPackageAssignmentPolicy.displayName = n.getStringValue() as any ; },
        "expiration": n => { accessPackageAssignmentPolicy.expiration = n.getObject(deserializeIntoExpirationPattern) as any ; },
        "modifiedDateTime": n => { accessPackageAssignmentPolicy.modifiedDateTime = n.getDateValue() as any ; },
        "requestApprovalSettings": n => { accessPackageAssignmentPolicy.requestApprovalSettings = n.getObject(deserializeIntoAccessPackageAssignmentApprovalSettings) as any ; },
        "requestorSettings": n => { accessPackageAssignmentPolicy.requestorSettings = n.getObject(deserializeIntoAccessPackageAssignmentRequestorSettings) as any ; },
        "reviewSettings": n => { accessPackageAssignmentPolicy.reviewSettings = n.getObject(deserializeIntoAccessPackageAssignmentReviewSettings) as any ; },
        "specificAllowedTargets": n => { accessPackageAssignmentPolicy.specificAllowedTargets = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSubjectSet) as any ; },
    }
}
