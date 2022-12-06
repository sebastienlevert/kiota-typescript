import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoLicenseUnitsDetail} from './deserializeIntoLicenseUnitsDetail';
import {deserializeIntoServicePlanInfo} from './deserializeIntoServicePlanInfo';
import {SubscribedSku} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSubscribedSku(subscribedSku: SubscribedSku | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(subscribedSku),
        "appliesTo": n => { subscribedSku.appliesTo = n.getStringValue() as any ; },
        "capabilityStatus": n => { subscribedSku.capabilityStatus = n.getStringValue() as any ; },
        "consumedUnits": n => { subscribedSku.consumedUnits = n.getNumberValue() as any ; },
        "prepaidUnits": n => { subscribedSku.prepaidUnits = n.getObject(deserializeIntoLicenseUnitsDetail) as any ; },
        "servicePlans": n => { subscribedSku.servicePlans = n.getCollectionOfObjectValuesFromMethod(deserializeIntoServicePlanInfo) as any ; },
        "skuId": n => { subscribedSku.skuId = n.getStringValue() as any ; },
        "skuPartNumber": n => { subscribedSku.skuPartNumber = n.getStringValue() as any ; },
    }
}
