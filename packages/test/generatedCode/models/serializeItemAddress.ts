import {ItemAddress} from './index';
import {serializeGeoCoordinates} from './serializeGeoCoordinates';
import {serializeItemFacet} from './serializeItemFacet';
import {serializePhysicalAddress} from './serializePhysicalAddress';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeItemAddress(writer: SerializationWriter, itemAddress: ItemAddress | undefined = {}) : void {
        serializeItemFacet(writer, itemAddress)
            writer.writeObjectValueFromMethod("detail", itemAddress.detail as any, serializePhysicalAddress);
            writer.writeStringValue("displayName", itemAddress.displayName);
            writer.writeObjectValueFromMethod("geoCoordinates", itemAddress.geoCoordinates as any, serializeGeoCoordinates);
}
