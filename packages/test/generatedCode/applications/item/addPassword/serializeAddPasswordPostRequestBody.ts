import {serializePasswordCredential} from '../../../models/serializePasswordCredential';
import {AddPasswordPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddPasswordPostRequestBody(writer: SerializationWriter, addPasswordPostRequestBody: AddPasswordPostRequestBody | undefined = {}) : void {
            writer.writeObjectValueFromMethod("passwordCredential", addPasswordPostRequestBody.passwordCredential as any, serializePasswordCredential);
}
