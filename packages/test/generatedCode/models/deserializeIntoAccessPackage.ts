import {deserializeIntoAccessPackageAssignmentPolicy} from './deserializeIntoAccessPackageAssignmentPolicy';
import {deserializeIntoAccessPackageCatalog} from './deserializeIntoAccessPackageCatalog';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoGroup} from './deserializeIntoGroup';
import {AccessPackage} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackage(accessPackage: AccessPackage | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(accessPackage),
        "accessPackagesIncompatibleWith": n => { accessPackage.accessPackagesIncompatibleWith = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessPackage) as any ; },
        "assignmentPolicies": n => { accessPackage.assignmentPolicies = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessPackageAssignmentPolicy) as any ; },
        "catalog": n => { accessPackage.catalog = n.getObject(deserializeIntoAccessPackageCatalog) as any ; },
        "createdDateTime": n => { accessPackage.createdDateTime = n.getDateValue() as any ; },
        "description": n => { accessPackage.description = n.getStringValue() as any ; },
        "displayName": n => { accessPackage.displayName = n.getStringValue() as any ; },
        "incompatibleAccessPackages": n => { accessPackage.incompatibleAccessPackages = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessPackage) as any ; },
        "incompatibleGroups": n => { accessPackage.incompatibleGroups = n.getCollectionOfObjectValuesFromMethod(deserializeIntoGroup) as any ; },
        "isHidden": n => { accessPackage.isHidden = n.getBooleanValue() as any ; },
        "modifiedDateTime": n => { accessPackage.modifiedDateTime = n.getDateValue() as any ; },
    }
}
