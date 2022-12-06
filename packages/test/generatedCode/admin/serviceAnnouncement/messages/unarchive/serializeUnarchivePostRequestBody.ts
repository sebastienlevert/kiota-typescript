import {UnarchivePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnarchivePostRequestBody(writer: SerializationWriter, unarchivePostRequestBody: UnarchivePostRequestBody | undefined = {}) : void {
            writer.writeCollectionOfPrimitiveValues<string>("messageIds", unarchivePostRequestBody.messageIds);
}
