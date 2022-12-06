import {deserializeIntoProvisioningErrorInfo} from './deserializeIntoProvisioningErrorInfo';
import {ProvisioningStatusInfo} from './index';
import {ProvisioningResult} from './provisioningResult';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProvisioningStatusInfo(provisioningStatusInfo: ProvisioningStatusInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "errorInformation": n => { provisioningStatusInfo.errorInformation = n.getObject(deserializeIntoProvisioningErrorInfo) as any ; },
        "@odata.type": n => { provisioningStatusInfo.odataType = n.getStringValue() as any ; },
        "status": n => { provisioningStatusInfo.status = n.getEnumValue<ProvisioningResult>(ProvisioningResult) as any ; },
    }
}
