import {SubscribedSku} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeLicenseUnitsDetail} from './serializeLicenseUnitsDetail';
import {serializeServicePlanInfo} from './serializeServicePlanInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSubscribedSku(writer: SerializationWriter, subscribedSku: SubscribedSku | undefined = {}) : void {
        serializeEntity(writer, subscribedSku)
            writer.writeStringValue("appliesTo", subscribedSku.appliesTo);
            writer.writeStringValue("capabilityStatus", subscribedSku.capabilityStatus);
            writer.writeNumberValue("consumedUnits", subscribedSku.consumedUnits);
            writer.writeObjectValueFromMethod("prepaidUnits", subscribedSku.prepaidUnits as any, serializeLicenseUnitsDetail);
            writer.writeCollectionOfObjectValuesFromMethod("servicePlans", subscribedSku.servicePlans as any, serializeServicePlanInfo);
            writer.writeStringValue("skuId", subscribedSku.skuId);
            writer.writeStringValue("skuPartNumber", subscribedSku.skuPartNumber);
}
