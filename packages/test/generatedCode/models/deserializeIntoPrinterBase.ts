import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoPrinterCapabilities} from './deserializeIntoPrinterCapabilities';
import {deserializeIntoPrinterDefaults} from './deserializeIntoPrinterDefaults';
import {deserializeIntoPrinterLocation} from './deserializeIntoPrinterLocation';
import {deserializeIntoPrinterStatus} from './deserializeIntoPrinterStatus';
import {deserializeIntoPrintJob} from './deserializeIntoPrintJob';
import {PrinterBase} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrinterBase(printerBase: PrinterBase | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(printerBase),
        "capabilities": n => { printerBase.capabilities = n.getObject(deserializeIntoPrinterCapabilities) as any ; },
        "defaults": n => { printerBase.defaults = n.getObject(deserializeIntoPrinterDefaults) as any ; },
        "displayName": n => { printerBase.displayName = n.getStringValue() as any ; },
        "isAcceptingJobs": n => { printerBase.isAcceptingJobs = n.getBooleanValue() as any ; },
        "jobs": n => { printerBase.jobs = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPrintJob) as any ; },
        "location": n => { printerBase.location = n.getObject(deserializeIntoPrinterLocation) as any ; },
        "manufacturer": n => { printerBase.manufacturer = n.getStringValue() as any ; },
        "model": n => { printerBase.model = n.getStringValue() as any ; },
        "name": n => { printerBase.name = n.getStringValue() as any ; },
        "status": n => { printerBase.status = n.getObject(deserializeIntoPrinterStatus) as any ; },
    }
}
