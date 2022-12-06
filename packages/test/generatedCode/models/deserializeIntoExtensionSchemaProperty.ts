import {ExtensionSchemaProperty} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExtensionSchemaProperty(extensionSchemaProperty: ExtensionSchemaProperty | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "name": n => { extensionSchemaProperty.name = n.getStringValue() as any ; },
        "@odata.type": n => { extensionSchemaProperty.odataType = n.getStringValue() as any ; },
        "type": n => { extensionSchemaProperty.type = n.getStringValue() as any ; },
    }
}
