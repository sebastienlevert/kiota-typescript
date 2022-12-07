import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoServicePlanInfo} from './deserializeIntoServicePlanInfo';
import {LicenseDetails} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLicenseDetails(licenseDetails: LicenseDetails | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(licenseDetails),
        "servicePlans": n => { licenseDetails.servicePlans = n.getCollectionOfObjectValuesFromMethod(deserializeIntoServicePlanInfo) as any ; },
        "skuId": n => { licenseDetails.skuId = n.getStringValue() as any ; },
        "skuPartNumber": n => { licenseDetails.skuPartNumber = n.getStringValue() as any ; },
    }
}
