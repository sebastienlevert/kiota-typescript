import {PrinterLocation} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrinterLocation(writer: SerializationWriter, printerLocation: PrinterLocation | undefined = {}) : void {
            writer.writeNumberValue("altitudeInMeters", printerLocation.altitudeInMeters);
            writer.writeStringValue("building", printerLocation.building);
            writer.writeStringValue("city", printerLocation.city);
            writer.writeStringValue("countryOrRegion", printerLocation.countryOrRegion);
            writer.writeStringValue("floor", printerLocation.floor);
            writer.writeStringValue("floorDescription", printerLocation.floorDescription);
            writer.writeNumberValue("floorNumber", printerLocation.floorNumber);
            writer.writeNumberValue("latitude", printerLocation.latitude);
            writer.writeNumberValue("longitude", printerLocation.longitude);
            writer.writeCollectionOfPrimitiveValues<string>("organization", printerLocation.organization);
            writer.writeStringValue("postalCode", printerLocation.postalCode);
            writer.writeStringValue("roomDescription", printerLocation.roomDescription);
            writer.writeStringValue("roomName", printerLocation.roomName);
            writer.writeNumberValue("roomNumber", printerLocation.roomNumber);
            writer.writeStringValue("site", printerLocation.site);
            writer.writeStringValue("stateOrProvince", printerLocation.stateOrProvince);
            writer.writeStringValue("streetAddress", printerLocation.streetAddress);
            writer.writeCollectionOfPrimitiveValues<string>("subdivision", printerLocation.subdivision);
            writer.writeCollectionOfPrimitiveValues<string>("subunit", printerLocation.subunit);
}
