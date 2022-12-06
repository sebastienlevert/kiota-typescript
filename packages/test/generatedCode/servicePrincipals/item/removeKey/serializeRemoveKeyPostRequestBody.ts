import {RemoveKeyPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRemoveKeyPostRequestBody(writer: SerializationWriter, removeKeyPostRequestBody: RemoveKeyPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("keyId", removeKeyPostRequestBody.keyId);
            writer.writeStringValue("proof", removeKeyPostRequestBody.proof);
}
