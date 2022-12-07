import {GeoCoordinates} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGeoCoordinates(geoCoordinates: GeoCoordinates | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "altitude": n => { geoCoordinates.altitude = n.getNumberValue() as any ; },
        "latitude": n => { geoCoordinates.latitude = n.getNumberValue() as any ; },
        "longitude": n => { geoCoordinates.longitude = n.getNumberValue() as any ; },
    }
}
