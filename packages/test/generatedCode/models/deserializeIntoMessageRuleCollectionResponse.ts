import {deserializeIntoMessageRule} from './deserializeIntoMessageRule';
import {MessageRuleCollectionResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMessageRuleCollectionResponse(messageRuleCollectionResponse: MessageRuleCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.nextLink": n => { messageRuleCollectionResponse.odataNextLink = n.getStringValue() as any ; },
        "value": n => { messageRuleCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMessageRule) as any ; },
    }
}
