import {ProvisioningErrorInfo} from './index';
import {ProvisioningStatusErrorCategory} from './provisioningStatusErrorCategory';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProvisioningErrorInfo(provisioningErrorInfo: ProvisioningErrorInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "additionalDetails": n => { provisioningErrorInfo.additionalDetails = n.getStringValue() as any ; },
        "errorCategory": n => { provisioningErrorInfo.errorCategory = n.getEnumValue<ProvisioningStatusErrorCategory>(ProvisioningStatusErrorCategory) as any ; },
        "errorCode": n => { provisioningErrorInfo.errorCode = n.getStringValue() as any ; },
        "@odata.type": n => { provisioningErrorInfo.odataType = n.getStringValue() as any ; },
        "reason": n => { provisioningErrorInfo.reason = n.getStringValue() as any ; },
        "recommendedAction": n => { provisioningErrorInfo.recommendedAction = n.getStringValue() as any ; },
    }
}
