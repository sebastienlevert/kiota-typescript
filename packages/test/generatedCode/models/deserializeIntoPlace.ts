import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoOutlookGeoCoordinates} from './deserializeIntoOutlookGeoCoordinates';
import {deserializeIntoPhysicalAddress} from './deserializeIntoPhysicalAddress';
import {Place} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlace(place: Place | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(place),
        "address": n => { place.address = n.getObject(deserializeIntoPhysicalAddress) as any ; },
        "displayName": n => { place.displayName = n.getStringValue() as any ; },
        "geoCoordinates": n => { place.geoCoordinates = n.getObject(deserializeIntoOutlookGeoCoordinates) as any ; },
        "phone": n => { place.phone = n.getStringValue() as any ; },
    }
}
