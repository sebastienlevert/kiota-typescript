import {X509CertificateAuthenticationModeConfiguration} from './index';
import {serializeX509CertificateRule} from './serializeX509CertificateRule';
import {X509CertificateAuthenticationMode} from './x509CertificateAuthenticationMode';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeX509CertificateAuthenticationModeConfiguration(writer: SerializationWriter, x509CertificateAuthenticationModeConfiguration: X509CertificateAuthenticationModeConfiguration | undefined = {}) : void {
            writer.writeStringValue("@odata.type", x509CertificateAuthenticationModeConfiguration.odataType);
            writer.writeCollectionOfObjectValuesFromMethod("rules", x509CertificateAuthenticationModeConfiguration.rules as any, serializeX509CertificateRule);
            writer.writeEnumValue<X509CertificateAuthenticationMode>("x509CertificateAuthenticationDefaultMode", x509CertificateAuthenticationModeConfiguration.x509CertificateAuthenticationDefaultMode);
}
