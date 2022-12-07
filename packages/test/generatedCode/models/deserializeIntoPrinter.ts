import {deserializeIntoPrintConnector} from './deserializeIntoPrintConnector';
import {deserializeIntoPrinterBase} from './deserializeIntoPrinterBase';
import {deserializeIntoPrinterShare} from './deserializeIntoPrinterShare';
import {deserializeIntoPrintTaskTrigger} from './deserializeIntoPrintTaskTrigger';
import {Printer} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrinter(printer: Printer | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPrinterBase(printer),
        "acceptingJobs": n => { printer.acceptingJobs = n.getBooleanValue() as any ; },
        "connectors": n => { printer.connectors = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPrintConnector) as any ; },
        "hasPhysicalDevice": n => { printer.hasPhysicalDevice = n.getBooleanValue() as any ; },
        "isShared": n => { printer.isShared = n.getBooleanValue() as any ; },
        "lastSeenDateTime": n => { printer.lastSeenDateTime = n.getDateValue() as any ; },
        "registeredDateTime": n => { printer.registeredDateTime = n.getDateValue() as any ; },
        "share": n => { printer.share = n.getObject(deserializeIntoPrinterShare) as any ; },
        "shares": n => { printer.shares = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPrinterShare) as any ; },
        "taskTriggers": n => { printer.taskTriggers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPrintTaskTrigger) as any ; },
    }
}
