import {PrinterBase} from './index';
import {serializeEntity} from './serializeEntity';
import {serializePrinterCapabilities} from './serializePrinterCapabilities';
import {serializePrinterDefaults} from './serializePrinterDefaults';
import {serializePrinterLocation} from './serializePrinterLocation';
import {serializePrinterStatus} from './serializePrinterStatus';
import {serializePrintJob} from './serializePrintJob';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrinterBase(writer: SerializationWriter, printerBase: PrinterBase | undefined = {}) : void {
        serializeEntity(writer, printerBase)
            writer.writeObjectValueFromMethod("capabilities", printerBase.capabilities as any, serializePrinterCapabilities);
            writer.writeObjectValueFromMethod("defaults", printerBase.defaults as any, serializePrinterDefaults);
            writer.writeStringValue("displayName", printerBase.displayName);
            writer.writeBooleanValue("isAcceptingJobs", printerBase.isAcceptingJobs);
            writer.writeCollectionOfObjectValuesFromMethod("jobs", printerBase.jobs as any, serializePrintJob);
            writer.writeObjectValueFromMethod("location", printerBase.location as any, serializePrinterLocation);
            writer.writeStringValue("manufacturer", printerBase.manufacturer);
            writer.writeStringValue("model", printerBase.model);
            writer.writeStringValue("name", printerBase.name);
            writer.writeObjectValueFromMethod("status", printerBase.status as any, serializePrinterStatus);
}
