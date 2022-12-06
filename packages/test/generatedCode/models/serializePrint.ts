import {Print} from './index';
import {serializePrintConnector} from './serializePrintConnector';
import {serializePrinter} from './serializePrinter';
import {serializePrinterShare} from './serializePrinterShare';
import {serializePrintOperation} from './serializePrintOperation';
import {serializePrintService} from './serializePrintService';
import {serializePrintSettings} from './serializePrintSettings';
import {serializePrintTaskDefinition} from './serializePrintTaskDefinition';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrint(writer: SerializationWriter, print: Print | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("connectors", print.connectors as any, serializePrintConnector);
            writer.writeStringValue("@odata.type", print.odataType);
            writer.writeCollectionOfObjectValuesFromMethod("operations", print.operations as any, serializePrintOperation);
            writer.writeCollectionOfObjectValuesFromMethod("printers", print.printers as any, serializePrinter);
            writer.writeCollectionOfObjectValuesFromMethod("services", print.services as any, serializePrintService);
            writer.writeObjectValueFromMethod("settings", print.settings as any, serializePrintSettings);
            writer.writeCollectionOfObjectValuesFromMethod("shares", print.shares as any, serializePrinterShare);
            writer.writeCollectionOfObjectValuesFromMethod("taskDefinitions", print.taskDefinitions as any, serializePrintTaskDefinition);
}
