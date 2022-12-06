import {deserializeIntoApiAuthenticationConfigurationBase} from './deserializeIntoApiAuthenticationConfigurationBase';
import {deserializeIntoPkcs12CertificateInformation} from './deserializeIntoPkcs12CertificateInformation';
import {ClientCertificateAuthentication} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoClientCertificateAuthentication(clientCertificateAuthentication: ClientCertificateAuthentication | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoApiAuthenticationConfigurationBase(clientCertificateAuthentication),
        "certificateList": n => { clientCertificateAuthentication.certificateList = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPkcs12CertificateInformation) as any ; },
    }
}
