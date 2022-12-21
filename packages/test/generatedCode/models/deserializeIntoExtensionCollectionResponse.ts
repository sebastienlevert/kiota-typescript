import {deserializeIntoExtension} from './deserializeIntoExtension';
import {ExtensionCollectionResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExtensionCollectionResponse(extensionCollectionResponse: ExtensionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.nextLink": n => { extensionCollectionResponse.odataNextLink = n.getStringValue() as any ; },
        "value": n => { extensionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoExtension) as any ; },
    }
}
