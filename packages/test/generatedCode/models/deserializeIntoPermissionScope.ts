import {PermissionScope} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPermissionScope(permissionScope: PermissionScope | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "adminConsentDescription": n => { permissionScope.adminConsentDescription = n.getStringValue() as any ; },
        "adminConsentDisplayName": n => { permissionScope.adminConsentDisplayName = n.getStringValue() as any ; },
        "id": n => { permissionScope.id = n.getStringValue() as any ; },
        "isEnabled": n => { permissionScope.isEnabled = n.getBooleanValue() as any ; },
        "origin": n => { permissionScope.origin = n.getStringValue() as any ; },
        "type": n => { permissionScope.type = n.getStringValue() as any ; },
        "userConsentDescription": n => { permissionScope.userConsentDescription = n.getStringValue() as any ; },
        "userConsentDisplayName": n => { permissionScope.userConsentDisplayName = n.getStringValue() as any ; },
        "value": n => { permissionScope.value = n.getStringValue() as any ; },
    }
}
