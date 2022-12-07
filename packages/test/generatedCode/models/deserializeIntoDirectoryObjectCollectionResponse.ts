import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {DirectoryObjectCollectionResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDirectoryObjectCollectionResponse(directoryObjectCollectionResponse: DirectoryObjectCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.nextLink": n => { directoryObjectCollectionResponse.odataNextLink = n.getStringValue() as any ; },
        "value": n => { directoryObjectCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
    }
}
