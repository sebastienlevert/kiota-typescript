import {deserializeIntoMessage} from './deserializeIntoMessage';
import {MessageCollectionResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMessageCollectionResponse(messageCollectionResponse: MessageCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.nextLink": n => { messageCollectionResponse.odataNextLink = n.getStringValue() as any ; },
        "value": n => { messageCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMessage) as any ; },
    }
}
