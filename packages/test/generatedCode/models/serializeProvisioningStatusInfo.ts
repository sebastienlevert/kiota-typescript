import {ProvisioningStatusInfo} from './index';
import {ProvisioningResult} from './provisioningResult';
import {serializeProvisioningErrorInfo} from './serializeProvisioningErrorInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeProvisioningStatusInfo(writer: SerializationWriter, provisioningStatusInfo: ProvisioningStatusInfo | undefined = {}) : void {
            writer.writeObjectValueFromMethod("errorInformation", provisioningStatusInfo.errorInformation as any, serializeProvisioningErrorInfo);
            writer.writeStringValue("@odata.type", provisioningStatusInfo.odataType);
            writer.writeEnumValue<ProvisioningResult>("status", provisioningStatusInfo.status);
}
