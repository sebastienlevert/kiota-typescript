import {PrintUsageByPrinter} from './index';
import {serializePrintUsage} from './serializePrintUsage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintUsageByPrinter(writer: SerializationWriter, printUsageByPrinter: PrintUsageByPrinter | undefined = {}) : void {
        serializePrintUsage(writer, printUsageByPrinter)
            writer.writeStringValue("printerId", printUsageByPrinter.printerId);
}
