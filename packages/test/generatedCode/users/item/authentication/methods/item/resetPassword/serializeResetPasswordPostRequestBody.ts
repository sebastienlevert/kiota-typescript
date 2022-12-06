import {ResetPasswordPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeResetPasswordPostRequestBody(writer: SerializationWriter, resetPasswordPostRequestBody: ResetPasswordPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("newPassword", resetPasswordPostRequestBody.newPassword);
}
