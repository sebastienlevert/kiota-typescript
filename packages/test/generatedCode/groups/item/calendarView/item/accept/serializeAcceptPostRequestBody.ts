import {AcceptPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAcceptPostRequestBody(writer: SerializationWriter, acceptPostRequestBody: AcceptPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("comment", acceptPostRequestBody.comment);
            writer.writeBooleanValue("sendResponse", acceptPostRequestBody.sendResponse);
}
