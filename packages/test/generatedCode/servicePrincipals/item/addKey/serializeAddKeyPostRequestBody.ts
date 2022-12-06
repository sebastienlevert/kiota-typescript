import {serializeKeyCredential} from '../../../models/serializeKeyCredential';
import {serializePasswordCredential} from '../../../models/serializePasswordCredential';
import {AddKeyPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddKeyPostRequestBody(writer: SerializationWriter, addKeyPostRequestBody: AddKeyPostRequestBody | undefined = {}) : void {
            writer.writeObjectValueFromMethod("keyCredential", addKeyPostRequestBody.keyCredential as any, serializeKeyCredential);
            writer.writeObjectValueFromMethod("passwordCredential", addKeyPostRequestBody.passwordCredential as any, serializePasswordCredential);
            writer.writeStringValue("proof", addKeyPostRequestBody.proof);
}
