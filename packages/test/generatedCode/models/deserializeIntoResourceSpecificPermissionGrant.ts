import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {ResourceSpecificPermissionGrant} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoResourceSpecificPermissionGrant(resourceSpecificPermissionGrant: ResourceSpecificPermissionGrant | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDirectoryObject(resourceSpecificPermissionGrant),
        "clientAppId": n => { resourceSpecificPermissionGrant.clientAppId = n.getStringValue() as any ; },
        "clientId": n => { resourceSpecificPermissionGrant.clientId = n.getStringValue() as any ; },
        "permission": n => { resourceSpecificPermissionGrant.permission = n.getStringValue() as any ; },
        "permissionType": n => { resourceSpecificPermissionGrant.permissionType = n.getStringValue() as any ; },
        "resourceAppId": n => { resourceSpecificPermissionGrant.resourceAppId = n.getStringValue() as any ; },
    }
}
