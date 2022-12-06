import {PasswordResetResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePasswordResetResponse(writer: SerializationWriter, passwordResetResponse: PasswordResetResponse | undefined = {}) : void {
            writer.writeStringValue("newPassword", passwordResetResponse.newPassword);
            writer.writeStringValue("@odata.type", passwordResetResponse.odataType);
}
