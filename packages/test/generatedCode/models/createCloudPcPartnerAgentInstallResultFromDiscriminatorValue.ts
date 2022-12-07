import {CloudPcPartnerAgentInstallResult} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCloudPcPartnerAgentInstallResultFromDiscriminatorValue(parseNode: ParseNode | undefined) : CloudPcPartnerAgentInstallResult {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CloudPcPartnerAgentInstallResult();
}
