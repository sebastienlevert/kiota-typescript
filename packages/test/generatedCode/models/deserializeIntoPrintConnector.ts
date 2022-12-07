import {deserializeIntoDeviceHealth} from './deserializeIntoDeviceHealth';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoPrinterLocation} from './deserializeIntoPrinterLocation';
import {PrintConnector} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintConnector(printConnector: PrintConnector | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(printConnector),
        "appVersion": n => { printConnector.appVersion = n.getStringValue() as any ; },
        "deviceHealth": n => { printConnector.deviceHealth = n.getObject(deserializeIntoDeviceHealth) as any ; },
        "displayName": n => { printConnector.displayName = n.getStringValue() as any ; },
        "fullyQualifiedDomainName": n => { printConnector.fullyQualifiedDomainName = n.getStringValue() as any ; },
        "location": n => { printConnector.location = n.getObject(deserializeIntoPrinterLocation) as any ; },
        "name": n => { printConnector.name = n.getStringValue() as any ; },
        "operatingSystem": n => { printConnector.operatingSystem = n.getStringValue() as any ; },
        "registeredDateTime": n => { printConnector.registeredDateTime = n.getDateValue() as any ; },
    }
}
