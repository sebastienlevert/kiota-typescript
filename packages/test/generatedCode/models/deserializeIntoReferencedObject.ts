import {ReferencedObject} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoReferencedObject(referencedObject: ReferencedObject | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "referencedObjectName": n => { referencedObject.referencedObjectName = n.getStringValue() as any ; },
        "referencedProperty": n => { referencedObject.referencedProperty = n.getStringValue() as any ; },
    }
}
