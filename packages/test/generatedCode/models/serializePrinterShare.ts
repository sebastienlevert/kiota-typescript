import {PrinterShare} from './index';
import {serializeGroup} from './serializeGroup';
import {serializePrinter} from './serializePrinter';
import {serializePrinterBase} from './serializePrinterBase';
import {serializePrinterShareViewpoint} from './serializePrinterShareViewpoint';
import {serializeUser} from './serializeUser';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrinterShare(writer: SerializationWriter, printerShare: PrinterShare | undefined = {}) : void {
        serializePrinterBase(writer, printerShare)
            writer.writeBooleanValue("allowAllUsers", printerShare.allowAllUsers);
            writer.writeCollectionOfObjectValuesFromMethod("allowedGroups", printerShare.allowedGroups as any, serializeGroup);
            writer.writeCollectionOfObjectValuesFromMethod("allowedUsers", printerShare.allowedUsers as any, serializeUser);
            writer.writeDateValue("createdDateTime", printerShare.createdDateTime);
            writer.writeObjectValueFromMethod("printer", printerShare.printer as any, serializePrinter);
            writer.writeObjectValueFromMethod("viewPoint", printerShare.viewPoint as any, serializePrinterShareViewpoint);
}
