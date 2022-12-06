import {PrintConnector} from './index';
import {serializeEntity} from './serializeEntity';
import {serializePrinterLocation} from './serializePrinterLocation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintConnector(writer: SerializationWriter, printConnector: PrintConnector | undefined = {}) : void {
        serializeEntity(writer, printConnector)
            writer.writeStringValue("appVersion", printConnector.appVersion);
            writer.writeStringValue("displayName", printConnector.displayName);
            writer.writeStringValue("fullyQualifiedDomainName", printConnector.fullyQualifiedDomainName);
            writer.writeObjectValueFromMethod("location", printConnector.location as any, serializePrinterLocation);
            writer.writeStringValue("operatingSystem", printConnector.operatingSystem);
            writer.writeDateValue("registeredDateTime", printConnector.registeredDateTime);
}
