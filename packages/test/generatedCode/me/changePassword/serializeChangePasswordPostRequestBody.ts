import {ChangePasswordPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChangePasswordPostRequestBody(writer: SerializationWriter, changePasswordPostRequestBody: ChangePasswordPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("currentPassword", changePasswordPostRequestBody.currentPassword);
            writer.writeStringValue("newPassword", changePasswordPostRequestBody.newPassword);
}
