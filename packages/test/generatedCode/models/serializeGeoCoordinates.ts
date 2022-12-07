import {GeoCoordinates} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGeoCoordinates(writer: SerializationWriter, geoCoordinates: GeoCoordinates | undefined = {}) : void {
            writer.writeNumberValue("altitude", geoCoordinates.altitude);
            writer.writeNumberValue("latitude", geoCoordinates.latitude);
            writer.writeNumberValue("longitude", geoCoordinates.longitude);
}
