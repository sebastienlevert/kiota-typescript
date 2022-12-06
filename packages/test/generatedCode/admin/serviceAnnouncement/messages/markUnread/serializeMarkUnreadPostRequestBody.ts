import {MarkUnreadPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMarkUnreadPostRequestBody(writer: SerializationWriter, markUnreadPostRequestBody: MarkUnreadPostRequestBody | undefined = {}) : void {
            writer.writeCollectionOfPrimitiveValues<string>("messageIds", markUnreadPostRequestBody.messageIds);
}
