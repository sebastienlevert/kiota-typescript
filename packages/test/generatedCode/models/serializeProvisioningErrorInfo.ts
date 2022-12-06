import {ProvisioningErrorInfo} from './index';
import {ProvisioningStatusErrorCategory} from './provisioningStatusErrorCategory';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeProvisioningErrorInfo(writer: SerializationWriter, provisioningErrorInfo: ProvisioningErrorInfo | undefined = {}) : void {
            writer.writeStringValue("additionalDetails", provisioningErrorInfo.additionalDetails);
            writer.writeEnumValue<ProvisioningStatusErrorCategory>("errorCategory", provisioningErrorInfo.errorCategory);
            writer.writeStringValue("errorCode", provisioningErrorInfo.errorCode);
            writer.writeStringValue("@odata.type", provisioningErrorInfo.odataType);
            writer.writeStringValue("reason", provisioningErrorInfo.reason);
            writer.writeStringValue("recommendedAction", provisioningErrorInfo.recommendedAction);
}
