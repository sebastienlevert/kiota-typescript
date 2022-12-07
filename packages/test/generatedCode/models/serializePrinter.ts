import {Printer} from './index';
import {serializePrintConnector} from './serializePrintConnector';
import {serializePrinterBase} from './serializePrinterBase';
import {serializePrinterShare} from './serializePrinterShare';
import {serializePrintTaskTrigger} from './serializePrintTaskTrigger';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrinter(writer: SerializationWriter, printer: Printer | undefined = {}) : void {
        serializePrinterBase(writer, printer)
            writer.writeBooleanValue("acceptingJobs", printer.acceptingJobs);
            writer.writeCollectionOfObjectValuesFromMethod("connectors", printer.connectors as any, serializePrintConnector);
            writer.writeBooleanValue("hasPhysicalDevice", printer.hasPhysicalDevice);
            writer.writeBooleanValue("isShared", printer.isShared);
            writer.writeDateValue("lastSeenDateTime", printer.lastSeenDateTime);
            writer.writeDateValue("registeredDateTime", printer.registeredDateTime);
            writer.writeObjectValueFromMethod("share", printer.share as any, serializePrinterShare);
            writer.writeCollectionOfObjectValuesFromMethod("shares", printer.shares as any, serializePrinterShare);
            writer.writeCollectionOfObjectValuesFromMethod("taskTriggers", printer.taskTriggers as any, serializePrintTaskTrigger);
}
