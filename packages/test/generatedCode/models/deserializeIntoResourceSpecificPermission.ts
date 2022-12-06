import {ResourceSpecificPermission} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoResourceSpecificPermission(resourceSpecificPermission: ResourceSpecificPermission | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "description": n => { resourceSpecificPermission.description = n.getStringValue() as any ; },
        "displayName": n => { resourceSpecificPermission.displayName = n.getStringValue() as any ; },
        "id": n => { resourceSpecificPermission.id = n.getStringValue() as any ; },
        "isEnabled": n => { resourceSpecificPermission.isEnabled = n.getBooleanValue() as any ; },
        "@odata.type": n => { resourceSpecificPermission.odataType = n.getStringValue() as any ; },
        "value": n => { resourceSpecificPermission.value = n.getStringValue() as any ; },
    }
}
