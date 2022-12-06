import {MessageRuleCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMessageRule} from './serializeMessageRule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMessageRuleCollectionResponse(writer: SerializationWriter, messageRuleCollectionResponse: MessageRuleCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, messageRuleCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", messageRuleCollectionResponse.value as any, serializeMessageRule);
}
