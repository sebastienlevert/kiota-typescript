import {ValidatePropertiesPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeValidatePropertiesPostRequestBody(writer: SerializationWriter, validatePropertiesPostRequestBody: ValidatePropertiesPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("displayName", validatePropertiesPostRequestBody.displayName);
            writer.writeStringValue("mailNickname", validatePropertiesPostRequestBody.mailNickname);
            writer.writeStringValue("onBehalfOfUserId", validatePropertiesPostRequestBody.onBehalfOfUserId);
}
