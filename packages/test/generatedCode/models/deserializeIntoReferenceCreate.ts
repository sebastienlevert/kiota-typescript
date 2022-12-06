import {ReferenceCreate} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoReferenceCreate(referenceCreate: ReferenceCreate | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.id": n => { referenceCreate.odataId = n.getStringValue() as any ; },
    }
}
