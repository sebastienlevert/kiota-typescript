import {RemovePasswordPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRemovePasswordPostRequestBody(writer: SerializationWriter, removePasswordPostRequestBody: RemovePasswordPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("keyId", removePasswordPostRequestBody.keyId);
}
