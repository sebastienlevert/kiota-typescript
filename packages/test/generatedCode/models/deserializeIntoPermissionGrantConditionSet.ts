import {deserializeIntoEntity} from './deserializeIntoEntity';
import {PermissionGrantConditionSet} from './index';
import {PermissionType} from './permissionType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPermissionGrantConditionSet(permissionGrantConditionSet: PermissionGrantConditionSet | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(permissionGrantConditionSet),
        "clientApplicationIds": n => { permissionGrantConditionSet.clientApplicationIds = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "clientApplicationPublisherIds": n => { permissionGrantConditionSet.clientApplicationPublisherIds = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "clientApplicationsFromVerifiedPublisherOnly": n => { permissionGrantConditionSet.clientApplicationsFromVerifiedPublisherOnly = n.getBooleanValue() as any ; },
        "clientApplicationTenantIds": n => { permissionGrantConditionSet.clientApplicationTenantIds = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "permissionClassification": n => { permissionGrantConditionSet.permissionClassification = n.getStringValue() as any ; },
        "permissions": n => { permissionGrantConditionSet.permissions = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "permissionType": n => { permissionGrantConditionSet.permissionType = n.getEnumValue<PermissionType>(PermissionType) as any ; },
        "resourceApplication": n => { permissionGrantConditionSet.resourceApplication = n.getStringValue() as any ; },
    }
}
