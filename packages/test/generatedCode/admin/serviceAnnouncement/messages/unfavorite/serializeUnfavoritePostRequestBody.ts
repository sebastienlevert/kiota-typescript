import {UnfavoritePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnfavoritePostRequestBody(writer: SerializationWriter, unfavoritePostRequestBody: UnfavoritePostRequestBody | undefined = {}) : void {
            writer.writeCollectionOfPrimitiveValues<string>("messageIds", unfavoritePostRequestBody.messageIds);
}
