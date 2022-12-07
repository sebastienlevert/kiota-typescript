import {deserializeIntoGroup} from './deserializeIntoGroup';
import {deserializeIntoPrinter} from './deserializeIntoPrinter';
import {deserializeIntoPrinterBase} from './deserializeIntoPrinterBase';
import {deserializeIntoPrinterShareViewpoint} from './deserializeIntoPrinterShareViewpoint';
import {deserializeIntoUser} from './deserializeIntoUser';
import {PrinterShare} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrinterShare(printerShare: PrinterShare | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPrinterBase(printerShare),
        "allowAllUsers": n => { printerShare.allowAllUsers = n.getBooleanValue() as any ; },
        "allowedGroups": n => { printerShare.allowedGroups = n.getCollectionOfObjectValuesFromMethod(deserializeIntoGroup) as any ; },
        "allowedUsers": n => { printerShare.allowedUsers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUser) as any ; },
        "createdDateTime": n => { printerShare.createdDateTime = n.getDateValue() as any ; },
        "printer": n => { printerShare.printer = n.getObject(deserializeIntoPrinter) as any ; },
        "viewPoint": n => { printerShare.viewPoint = n.getObject(deserializeIntoPrinterShareViewpoint) as any ; },
    }
}
