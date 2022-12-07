import {PhysicalAddress} from './index';
import {PhysicalAddressType} from './physicalAddressType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePhysicalAddress(writer: SerializationWriter, physicalAddress: PhysicalAddress | undefined = {}) : void {
            writer.writeStringValue("city", physicalAddress.city);
            writer.writeStringValue("countryOrRegion", physicalAddress.countryOrRegion);
            writer.writeStringValue("postalCode", physicalAddress.postalCode);
            writer.writeStringValue("postOfficeBox", physicalAddress.postOfficeBox);
            writer.writeStringValue("state", physicalAddress.state);
            writer.writeStringValue("street", physicalAddress.street);
            writer.writeEnumValue<PhysicalAddressType>("type", physicalAddress.type);
}
