import {deserializeIntoKeyValue} from './deserializeIntoKeyValue';
import {AddIn} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddIn(addIn: AddIn | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "id": n => { addIn.id = n.getStringValue() as any ; },
        "properties": n => { addIn.properties = n.getCollectionOfObjectValuesFromMethod(deserializeIntoKeyValue) as any ; },
        "type": n => { addIn.type = n.getStringValue() as any ; },
    }
}
