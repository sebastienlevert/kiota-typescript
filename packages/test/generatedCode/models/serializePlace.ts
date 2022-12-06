import {Place} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeOutlookGeoCoordinates} from './serializeOutlookGeoCoordinates';
import {serializePhysicalAddress} from './serializePhysicalAddress';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlace(writer: SerializationWriter, place: Place | undefined = {}) : void {
        serializeEntity(writer, place)
            writer.writeObjectValueFromMethod("address", place.address as any, serializePhysicalAddress);
            writer.writeStringValue("displayName", place.displayName);
            writer.writeObjectValueFromMethod("geoCoordinates", place.geoCoordinates as any, serializeOutlookGeoCoordinates);
            writer.writeStringValue("phone", place.phone);
}
