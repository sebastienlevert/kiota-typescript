import {DeviceGeoLocation} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceGeoLocation(deviceGeoLocation: DeviceGeoLocation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "altitude": n => { deviceGeoLocation.altitude = n.getNumberValue() as any ; },
        "heading": n => { deviceGeoLocation.heading = n.getNumberValue() as any ; },
        "horizontalAccuracy": n => { deviceGeoLocation.horizontalAccuracy = n.getNumberValue() as any ; },
        "lastCollectedDateTime": n => { deviceGeoLocation.lastCollectedDateTime = n.getDateValue() as any ; },
        "latitude": n => { deviceGeoLocation.latitude = n.getNumberValue() as any ; },
        "longitude": n => { deviceGeoLocation.longitude = n.getNumberValue() as any ; },
        "@odata.type": n => { deviceGeoLocation.odataType = n.getStringValue() as any ; },
        "speed": n => { deviceGeoLocation.speed = n.getNumberValue() as any ; },
        "verticalAccuracy": n => { deviceGeoLocation.verticalAccuracy = n.getNumberValue() as any ; },
    }
}
