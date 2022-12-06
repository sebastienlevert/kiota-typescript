import {ResourcePermission} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoResourcePermission(resourcePermission: ResourcePermission | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { resourcePermission.odataType = n.getStringValue() as any ; },
        "type": n => { resourcePermission.type = n.getStringValue() as any ; },
        "value": n => { resourcePermission.value = n.getStringValue() as any ; },
    }
}
