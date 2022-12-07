import {PrinterShareViewpoint} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrinterShareViewpoint(printerShareViewpoint: PrinterShareViewpoint | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "lastUsedDateTime": n => { printerShareViewpoint.lastUsedDateTime = n.getDateValue() as any ; },
    }
}
