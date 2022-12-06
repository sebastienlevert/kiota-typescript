import {deserializeIntoPrintConnector} from './deserializeIntoPrintConnector';
import {deserializeIntoPrinter} from './deserializeIntoPrinter';
import {deserializeIntoPrinterShare} from './deserializeIntoPrinterShare';
import {deserializeIntoPrintOperation} from './deserializeIntoPrintOperation';
import {deserializeIntoPrintService} from './deserializeIntoPrintService';
import {deserializeIntoPrintSettings} from './deserializeIntoPrintSettings';
import {deserializeIntoPrintTaskDefinition} from './deserializeIntoPrintTaskDefinition';
import {Print} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrint(print: Print | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "connectors": n => { print.connectors = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPrintConnector) as any ; },
        "@odata.type": n => { print.odataType = n.getStringValue() as any ; },
        "operations": n => { print.operations = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPrintOperation) as any ; },
        "printers": n => { print.printers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPrinter) as any ; },
        "services": n => { print.services = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPrintService) as any ; },
        "settings": n => { print.settings = n.getObject(deserializeIntoPrintSettings) as any ; },
        "shares": n => { print.shares = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPrinterShare) as any ; },
        "taskDefinitions": n => { print.taskDefinitions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPrintTaskDefinition) as any ; },
    }
}
