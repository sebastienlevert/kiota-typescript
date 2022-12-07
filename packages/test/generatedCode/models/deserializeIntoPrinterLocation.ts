import {PrinterLocation} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrinterLocation(printerLocation: PrinterLocation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "altitudeInMeters": n => { printerLocation.altitudeInMeters = n.getNumberValue() as any ; },
        "building": n => { printerLocation.building = n.getStringValue() as any ; },
        "city": n => { printerLocation.city = n.getStringValue() as any ; },
        "countryOrRegion": n => { printerLocation.countryOrRegion = n.getStringValue() as any ; },
        "floor": n => { printerLocation.floor = n.getStringValue() as any ; },
        "floorDescription": n => { printerLocation.floorDescription = n.getStringValue() as any ; },
        "floorNumber": n => { printerLocation.floorNumber = n.getNumberValue() as any ; },
        "latitude": n => { printerLocation.latitude = n.getNumberValue() as any ; },
        "longitude": n => { printerLocation.longitude = n.getNumberValue() as any ; },
        "organization": n => { printerLocation.organization = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "postalCode": n => { printerLocation.postalCode = n.getStringValue() as any ; },
        "roomDescription": n => { printerLocation.roomDescription = n.getStringValue() as any ; },
        "roomName": n => { printerLocation.roomName = n.getStringValue() as any ; },
        "roomNumber": n => { printerLocation.roomNumber = n.getNumberValue() as any ; },
        "site": n => { printerLocation.site = n.getStringValue() as any ; },
        "stateOrProvince": n => { printerLocation.stateOrProvince = n.getStringValue() as any ; },
        "streetAddress": n => { printerLocation.streetAddress = n.getStringValue() as any ; },
        "subdivision": n => { printerLocation.subdivision = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "subunit": n => { printerLocation.subunit = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
