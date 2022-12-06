import {deserializeIntoPrintUsage} from './deserializeIntoPrintUsage';
import {PrintUsageByPrinter} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintUsageByPrinter(printUsageByPrinter: PrintUsageByPrinter | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPrintUsage(printUsageByPrinter),
        "printerId": n => { printUsageByPrinter.printerId = n.getStringValue() as any ; },
    }
}
