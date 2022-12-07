import {AppRole} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppRole(appRole: AppRole | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "allowedMemberTypes": n => { appRole.allowedMemberTypes = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "description": n => { appRole.description = n.getStringValue() as any ; },
        "displayName": n => { appRole.displayName = n.getStringValue() as any ; },
        "id": n => { appRole.id = n.getStringValue() as any ; },
        "isEnabled": n => { appRole.isEnabled = n.getBooleanValue() as any ; },
        "origin": n => { appRole.origin = n.getStringValue() as any ; },
        "value": n => { appRole.value = n.getStringValue() as any ; },
    }
}
