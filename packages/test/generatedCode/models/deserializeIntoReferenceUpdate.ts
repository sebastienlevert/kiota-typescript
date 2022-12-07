import {ReferenceUpdate} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoReferenceUpdate(referenceUpdate: ReferenceUpdate | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.id": n => { referenceUpdate.odataId = n.getStringValue() as any ; },
        "@odata.type": n => { referenceUpdate.odataType = n.getStringValue() as any ; },
    }
}
