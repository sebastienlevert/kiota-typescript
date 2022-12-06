import {PhysicalOfficeAddress} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePhysicalOfficeAddress(writer: SerializationWriter, physicalOfficeAddress: PhysicalOfficeAddress | undefined = {}) : void {
            writer.writeStringValue("city", physicalOfficeAddress.city);
            writer.writeStringValue("countryOrRegion", physicalOfficeAddress.countryOrRegion);
            writer.writeStringValue("@odata.type", physicalOfficeAddress.odataType);
            writer.writeStringValue("officeLocation", physicalOfficeAddress.officeLocation);
            writer.writeStringValue("postalCode", physicalOfficeAddress.postalCode);
            writer.writeStringValue("state", physicalOfficeAddress.state);
            writer.writeStringValue("street", physicalOfficeAddress.street);
}
