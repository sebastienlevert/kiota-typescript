import {CloudPcPartnerAgentInstallStatus} from './cloudPcPartnerAgentInstallStatus';
import {CloudPcPartnerAgentName} from './cloudPcPartnerAgentName';
import {CloudPcPartnerAgentInstallResult} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCloudPcPartnerAgentInstallResult(writer: SerializationWriter, cloudPcPartnerAgentInstallResult: CloudPcPartnerAgentInstallResult | undefined = {}) : void {
            writer.writeEnumValue<CloudPcPartnerAgentInstallStatus>("installStatus", cloudPcPartnerAgentInstallResult.installStatus);
            writer.writeBooleanValue("isThirdPartyPartner", cloudPcPartnerAgentInstallResult.isThirdPartyPartner);
            writer.writeEnumValue<CloudPcPartnerAgentName>("partnerAgentName", cloudPcPartnerAgentInstallResult.partnerAgentName);
            writer.writeBooleanValue("retriable", cloudPcPartnerAgentInstallResult.retriable);
}
