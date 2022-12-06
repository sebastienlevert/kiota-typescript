import {MessageRuleCollectionResponse} from './index';
import {serializeMessageRule} from './serializeMessageRule';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMessageRuleCollectionResponse(writer: SerializationWriter, messageRuleCollectionResponse: MessageRuleCollectionResponse | undefined = {}) : void {
            writer.writeStringValue("@odata.nextLink", messageRuleCollectionResponse.odataNextLink);
            writer.writeCollectionOfObjectValuesFromMethod("value", messageRuleCollectionResponse.value as any, serializeMessageRule);
}
