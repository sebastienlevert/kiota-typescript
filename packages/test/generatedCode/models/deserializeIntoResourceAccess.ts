import {ResourceAccess} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoResourceAccess(resourceAccess: ResourceAccess | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "id": n => { resourceAccess.id = n.getStringValue() as any ; },
        "@odata.type": n => { resourceAccess.odataType = n.getStringValue() as any ; },
        "type": n => { resourceAccess.type = n.getStringValue() as any ; },
    }
}
