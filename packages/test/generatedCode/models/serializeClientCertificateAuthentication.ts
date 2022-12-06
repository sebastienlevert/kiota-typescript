import {ClientCertificateAuthentication} from './index';
import {serializeApiAuthenticationConfigurationBase} from './serializeApiAuthenticationConfigurationBase';
import {serializePkcs12CertificateInformation} from './serializePkcs12CertificateInformation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeClientCertificateAuthentication(writer: SerializationWriter, clientCertificateAuthentication: ClientCertificateAuthentication | undefined = {}) : void {
        serializeApiAuthenticationConfigurationBase(writer, clientCertificateAuthentication)
            writer.writeCollectionOfObjectValuesFromMethod("certificateList", clientCertificateAuthentication.certificateList as any, serializePkcs12CertificateInformation);
}
