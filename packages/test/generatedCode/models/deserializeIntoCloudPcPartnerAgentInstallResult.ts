import {CloudPcPartnerAgentInstallStatus} from './cloudPcPartnerAgentInstallStatus';
import {CloudPcPartnerAgentName} from './cloudPcPartnerAgentName';
import {CloudPcPartnerAgentInstallResult} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCloudPcPartnerAgentInstallResult(cloudPcPartnerAgentInstallResult: CloudPcPartnerAgentInstallResult | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "installStatus": n => { cloudPcPartnerAgentInstallResult.installStatus = n.getEnumValue<CloudPcPartnerAgentInstallStatus>(CloudPcPartnerAgentInstallStatus) as any ; },
        "isThirdPartyPartner": n => { cloudPcPartnerAgentInstallResult.isThirdPartyPartner = n.getBooleanValue() as any ; },
        "partnerAgentName": n => { cloudPcPartnerAgentInstallResult.partnerAgentName = n.getEnumValue<CloudPcPartnerAgentName>(CloudPcPartnerAgentName) as any ; },
        "retriable": n => { cloudPcPartnerAgentInstallResult.retriable = n.getBooleanValue() as any ; },
    }
}
