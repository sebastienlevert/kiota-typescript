import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoMessageRule} from './deserializeIntoMessageRule';
import {MessageRuleCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMessageRuleCollectionResponse(messageRuleCollectionResponse: MessageRuleCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(messageRuleCollectionResponse),
        "value": n => { messageRuleCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMessageRule) as any ; },
    }
}
