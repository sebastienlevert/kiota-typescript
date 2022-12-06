import {WindowsInformationProtectionDataRecoveryCertificate} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionDataRecoveryCertificate(windowsInformationProtectionDataRecoveryCertificate: WindowsInformationProtectionDataRecoveryCertificate | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "certificate": n => { windowsInformationProtectionDataRecoveryCertificate.certificate = n.getStringValue() as any ; },
        "description": n => { windowsInformationProtectionDataRecoveryCertificate.description = n.getStringValue() as any ; },
        "expirationDateTime": n => { windowsInformationProtectionDataRecoveryCertificate.expirationDateTime = n.getDateValue() as any ; },
        "@odata.type": n => { windowsInformationProtectionDataRecoveryCertificate.odataType = n.getStringValue() as any ; },
        "subjectName": n => { windowsInformationProtectionDataRecoveryCertificate.subjectName = n.getStringValue() as any ; },
    }
}
