import {X509CertificateAuthenticationMethodConfigurationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeX509CertificateAuthenticationMethodConfiguration} from './serializeX509CertificateAuthenticationMethodConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeX509CertificateAuthenticationMethodConfigurationCollectionResponse(writer: SerializationWriter, x509CertificateAuthenticationMethodConfigurationCollectionResponse: X509CertificateAuthenticationMethodConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, x509CertificateAuthenticationMethodConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", x509CertificateAuthenticationMethodConfigurationCollectionResponse.value as any, serializeX509CertificateAuthenticationMethodConfiguration);
}
