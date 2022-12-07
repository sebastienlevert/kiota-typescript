import {Location} from './index';
import {LocationType} from './locationType';
import {LocationUniqueIdType} from './locationUniqueIdType';
import {serializeOutlookGeoCoordinates} from './serializeOutlookGeoCoordinates';
import {serializePhysicalAddress} from './serializePhysicalAddress';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLocation(writer: SerializationWriter, location: Location | undefined = {}) : void {
            writer.writeObjectValueFromMethod("address", location.address as any, serializePhysicalAddress);
            writer.writeObjectValueFromMethod("coordinates", location.coordinates as any, serializeOutlookGeoCoordinates);
            writer.writeStringValue("displayName", location.displayName);
            writer.writeStringValue("locationEmailAddress", location.locationEmailAddress);
            writer.writeEnumValue<LocationType>("locationType", location.locationType);
            writer.writeStringValue("locationUri", location.locationUri);
            writer.writeStringValue("uniqueId", location.uniqueId);
            writer.writeEnumValue<LocationUniqueIdType>("uniqueIdType", location.uniqueIdType);
}
