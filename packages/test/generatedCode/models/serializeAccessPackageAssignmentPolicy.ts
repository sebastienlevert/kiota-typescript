import {AllowedTargetScope} from './allowedTargetScope';
import {AccessPackageAssignmentPolicy} from './index';
import {serializeAccessPackage} from './serializeAccessPackage';
import {serializeAccessPackageAssignmentApprovalSettings} from './serializeAccessPackageAssignmentApprovalSettings';
import {serializeAccessPackageAssignmentRequestorSettings} from './serializeAccessPackageAssignmentRequestorSettings';
import {serializeAccessPackageAssignmentReviewSettings} from './serializeAccessPackageAssignmentReviewSettings';
import {serializeAccessPackageAutomaticRequestSettings} from './serializeAccessPackageAutomaticRequestSettings';
import {serializeAccessPackageCatalog} from './serializeAccessPackageCatalog';
import {serializeEntity} from './serializeEntity';
import {serializeExpirationPattern} from './serializeExpirationPattern';
import {serializeSubjectSet} from './serializeSubjectSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageAssignmentPolicy(writer: SerializationWriter, accessPackageAssignmentPolicy: AccessPackageAssignmentPolicy | undefined = {}) : void {
        serializeEntity(writer, accessPackageAssignmentPolicy)
            writer.writeObjectValueFromMethod("accessPackage", accessPackageAssignmentPolicy.accessPackage as any, serializeAccessPackage);
            writer.writeEnumValue<AllowedTargetScope>("allowedTargetScope", accessPackageAssignmentPolicy.allowedTargetScope);
            writer.writeObjectValueFromMethod("automaticRequestSettings", accessPackageAssignmentPolicy.automaticRequestSettings as any, serializeAccessPackageAutomaticRequestSettings);
            writer.writeObjectValueFromMethod("catalog", accessPackageAssignmentPolicy.catalog as any, serializeAccessPackageCatalog);
            writer.writeDateValue("createdDateTime", accessPackageAssignmentPolicy.createdDateTime);
            writer.writeStringValue("description", accessPackageAssignmentPolicy.description);
            writer.writeStringValue("displayName", accessPackageAssignmentPolicy.displayName);
            writer.writeObjectValueFromMethod("expiration", accessPackageAssignmentPolicy.expiration as any, serializeExpirationPattern);
            writer.writeDateValue("modifiedDateTime", accessPackageAssignmentPolicy.modifiedDateTime);
            writer.writeObjectValueFromMethod("requestApprovalSettings", accessPackageAssignmentPolicy.requestApprovalSettings as any, serializeAccessPackageAssignmentApprovalSettings);
            writer.writeObjectValueFromMethod("requestorSettings", accessPackageAssignmentPolicy.requestorSettings as any, serializeAccessPackageAssignmentRequestorSettings);
            writer.writeObjectValueFromMethod("reviewSettings", accessPackageAssignmentPolicy.reviewSettings as any, serializeAccessPackageAssignmentReviewSettings);
            writer.writeCollectionOfObjectValuesFromMethod("specificAllowedTargets", accessPackageAssignmentPolicy.specificAllowedTargets as any, serializeSubjectSet);
}
