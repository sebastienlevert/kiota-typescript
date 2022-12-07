import {deserializeIntoOutlookGeoCoordinates} from './deserializeIntoOutlookGeoCoordinates';
import {deserializeIntoPhysicalAddress} from './deserializeIntoPhysicalAddress';
import {Location} from './index';
import {LocationType} from './locationType';
import {LocationUniqueIdType} from './locationUniqueIdType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLocation(location: Location | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "address": n => { location.address = n.getObject(deserializeIntoPhysicalAddress) as any ; },
        "coordinates": n => { location.coordinates = n.getObject(deserializeIntoOutlookGeoCoordinates) as any ; },
        "displayName": n => { location.displayName = n.getStringValue() as any ; },
        "locationEmailAddress": n => { location.locationEmailAddress = n.getStringValue() as any ; },
        "locationType": n => { location.locationType = n.getEnumValue<LocationType>(LocationType) as any ; },
        "locationUri": n => { location.locationUri = n.getStringValue() as any ; },
        "uniqueId": n => { location.uniqueId = n.getStringValue() as any ; },
        "uniqueIdType": n => { location.uniqueIdType = n.getEnumValue<LocationUniqueIdType>(LocationUniqueIdType) as any ; },
    }
}
