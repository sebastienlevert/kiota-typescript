import {ValidatePermissionPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeValidatePermissionPostRequestBody(writer: SerializationWriter, validatePermissionPostRequestBody: ValidatePermissionPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("challengeToken", validatePermissionPostRequestBody.challengeToken);
            writer.writeStringValue("password", validatePermissionPostRequestBody.password);
}
