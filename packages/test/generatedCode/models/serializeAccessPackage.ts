import {AccessPackage} from './index';
import {serializeAccessPackageAssignmentPolicy} from './serializeAccessPackageAssignmentPolicy';
import {serializeAccessPackageCatalog} from './serializeAccessPackageCatalog';
import {serializeEntity} from './serializeEntity';
import {serializeGroup} from './serializeGroup';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackage(writer: SerializationWriter, accessPackage: AccessPackage | undefined = {}) : void {
        serializeEntity(writer, accessPackage)
            writer.writeCollectionOfObjectValuesFromMethod("accessPackagesIncompatibleWith", accessPackage.accessPackagesIncompatibleWith as any, serializeAccessPackage);
            writer.writeCollectionOfObjectValuesFromMethod("assignmentPolicies", accessPackage.assignmentPolicies as any, serializeAccessPackageAssignmentPolicy);
            writer.writeObjectValueFromMethod("catalog", accessPackage.catalog as any, serializeAccessPackageCatalog);
            writer.writeDateValue("createdDateTime", accessPackage.createdDateTime);
            writer.writeStringValue("description", accessPackage.description);
            writer.writeStringValue("displayName", accessPackage.displayName);
            writer.writeCollectionOfObjectValuesFromMethod("incompatibleAccessPackages", accessPackage.incompatibleAccessPackages as any, serializeAccessPackage);
            writer.writeCollectionOfObjectValuesFromMethod("incompatibleGroups", accessPackage.incompatibleGroups as any, serializeGroup);
            writer.writeBooleanValue("isHidden", accessPackage.isHidden);
            writer.writeDateValue("modifiedDateTime", accessPackage.modifiedDateTime);
}
