import {AddCopyPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddCopyPostRequestBody(writer: SerializationWriter, addCopyPostRequestBody: AddCopyPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("contentType", addCopyPostRequestBody.contentType);
}
