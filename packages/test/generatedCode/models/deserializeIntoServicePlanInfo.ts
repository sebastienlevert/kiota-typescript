import {ServicePlanInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServicePlanInfo(servicePlanInfo: ServicePlanInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "appliesTo": n => { servicePlanInfo.appliesTo = n.getStringValue() as any ; },
        "provisioningStatus": n => { servicePlanInfo.provisioningStatus = n.getStringValue() as any ; },
        "servicePlanId": n => { servicePlanInfo.servicePlanId = n.getStringValue() as any ; },
        "servicePlanName": n => { servicePlanInfo.servicePlanName = n.getStringValue() as any ; },
    }
}
