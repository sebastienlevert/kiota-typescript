import {OutlookGeoCoordinates} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOutlookGeoCoordinates(outlookGeoCoordinates: OutlookGeoCoordinates | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "accuracy": n => { outlookGeoCoordinates.accuracy = n.getNumberValue() as any ; },
        "altitude": n => { outlookGeoCoordinates.altitude = n.getNumberValue() as any ; },
        "altitudeAccuracy": n => { outlookGeoCoordinates.altitudeAccuracy = n.getNumberValue() as any ; },
        "latitude": n => { outlookGeoCoordinates.latitude = n.getNumberValue() as any ; },
        "longitude": n => { outlookGeoCoordinates.longitude = n.getNumberValue() as any ; },
    }
}
