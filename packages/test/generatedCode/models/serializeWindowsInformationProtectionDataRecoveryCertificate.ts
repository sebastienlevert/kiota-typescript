import {WindowsInformationProtectionDataRecoveryCertificate} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsInformationProtectionDataRecoveryCertificate(writer: SerializationWriter, windowsInformationProtectionDataRecoveryCertificate: WindowsInformationProtectionDataRecoveryCertificate | undefined = {}) : void {
            writer.writeStringValue("certificate", windowsInformationProtectionDataRecoveryCertificate.certificate);
            writer.writeStringValue("description", windowsInformationProtectionDataRecoveryCertificate.description);
            writer.writeDateValue("expirationDateTime", windowsInformationProtectionDataRecoveryCertificate.expirationDateTime);
            writer.writeStringValue("@odata.type", windowsInformationProtectionDataRecoveryCertificate.odataType);
            writer.writeStringValue("subjectName", windowsInformationProtectionDataRecoveryCertificate.subjectName);
}
