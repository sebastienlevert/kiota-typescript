import {Message, MessageCollectionResponse} from './index';
import {Message} from './message';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMessageCollectionResponse(messageCollectionResponse: MessageCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.nextLink": n => { MessageCollectionResponse.odataNextLink = n.getStringValue(); },
        "value": n => { MessageCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod<Message>(deserializeIntoMessage); },
    }
}
