import {ServicePlanInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServicePlanInfo(writer: SerializationWriter, servicePlanInfo: ServicePlanInfo | undefined = {}) : void {
            writer.writeStringValue("appliesTo", servicePlanInfo.appliesTo);
            writer.writeStringValue("provisioningStatus", servicePlanInfo.provisioningStatus);
            writer.writeStringValue("servicePlanId", servicePlanInfo.servicePlanId);
            writer.writeStringValue("servicePlanName", servicePlanInfo.servicePlanName);
}
