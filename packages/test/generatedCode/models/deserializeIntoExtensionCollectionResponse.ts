import {Extension} from './extension';
import {Extension, ExtensionCollectionResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExtensionCollectionResponse(extensionCollectionResponse: ExtensionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.nextLink": n => { ExtensionCollectionResponse.odataNextLink = n.getStringValue(); },
        "value": n => { ExtensionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod<Extension>(deserializeIntoExtension); },
    }
}
