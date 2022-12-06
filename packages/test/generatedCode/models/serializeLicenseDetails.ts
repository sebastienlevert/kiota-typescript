import {LicenseDetails} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeServicePlanInfo} from './serializeServicePlanInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLicenseDetails(writer: SerializationWriter, licenseDetails: LicenseDetails | undefined = {}) : void {
        serializeEntity(writer, licenseDetails)
            writer.writeCollectionOfObjectValuesFromMethod("servicePlans", licenseDetails.servicePlans as any, serializeServicePlanInfo);
            writer.writeStringValue("skuId", licenseDetails.skuId);
            writer.writeStringValue("skuPartNumber", licenseDetails.skuPartNumber);
}
