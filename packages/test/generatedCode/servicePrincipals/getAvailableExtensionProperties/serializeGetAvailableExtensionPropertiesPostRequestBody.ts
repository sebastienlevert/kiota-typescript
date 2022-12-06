import {GetAvailableExtensionPropertiesPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetAvailableExtensionPropertiesPostRequestBody(writer: SerializationWriter, getAvailableExtensionPropertiesPostRequestBody: GetAvailableExtensionPropertiesPostRequestBody | undefined = {}) : void {
            writer.writeBooleanValue("isSyncedFromOnPremises", getAvailableExtensionPropertiesPostRequestBody.isSyncedFromOnPremises);
}
