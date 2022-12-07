import {PrintConnector} from './index';
import {serializeDeviceHealth} from './serializeDeviceHealth';
import {serializeEntity} from './serializeEntity';
import {serializePrinterLocation} from './serializePrinterLocation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintConnector(writer: SerializationWriter, printConnector: PrintConnector | undefined = {}) : void {
        serializeEntity(writer, printConnector)
            writer.writeStringValue("appVersion", printConnector.appVersion);
            writer.writeObjectValueFromMethod("deviceHealth", printConnector.deviceHealth as any, serializeDeviceHealth);
            writer.writeStringValue("displayName", printConnector.displayName);
            writer.writeStringValue("fullyQualifiedDomainName", printConnector.fullyQualifiedDomainName);
            writer.writeObjectValueFromMethod("location", printConnector.location as any, serializePrinterLocation);
            writer.writeStringValue("name", printConnector.name);
            writer.writeStringValue("operatingSystem", printConnector.operatingSystem);
            writer.writeDateValue("registeredDateTime", printConnector.registeredDateTime);
}
