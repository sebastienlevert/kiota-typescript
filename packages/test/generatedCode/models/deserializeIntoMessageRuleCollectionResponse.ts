import {MessageRule, MessageRuleCollectionResponse} from './index';
import {MessageRule} from './messageRule';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMessageRuleCollectionResponse(messageRuleCollectionResponse: MessageRuleCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.nextLink": n => { MessageRuleCollectionResponse.odataNextLink = n.getStringValue(); },
        "value": n => { MessageRuleCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod<MessageRule>(deserializeIntoMessageRule); },
    }
}
