import {Pkcs12CertificateInformation} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePkcs12CertificateInformation(writer: SerializationWriter, pkcs12CertificateInformation: Pkcs12CertificateInformation | undefined = {}) : void {
            writer.writeBooleanValue("isActive", pkcs12CertificateInformation.isActive);
            writer.writeNumberValue("notAfter", pkcs12CertificateInformation.notAfter);
            writer.writeNumberValue("notBefore", pkcs12CertificateInformation.notBefore);
            writer.writeStringValue("@odata.type", pkcs12CertificateInformation.odataType);
            writer.writeStringValue("thumbprint", pkcs12CertificateInformation.thumbprint);
}
