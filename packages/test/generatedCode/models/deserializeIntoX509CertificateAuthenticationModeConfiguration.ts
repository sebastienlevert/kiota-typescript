import {deserializeIntoX509CertificateRule} from './deserializeIntoX509CertificateRule';
import {X509CertificateAuthenticationModeConfiguration} from './index';
import {X509CertificateAuthenticationMode} from './x509CertificateAuthenticationMode';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoX509CertificateAuthenticationModeConfiguration(x509CertificateAuthenticationModeConfiguration: X509CertificateAuthenticationModeConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { x509CertificateAuthenticationModeConfiguration.odataType = n.getStringValue() as any ; },
        "rules": n => { x509CertificateAuthenticationModeConfiguration.rules = n.getCollectionOfObjectValuesFromMethod(deserializeIntoX509CertificateRule) as any ; },
        "x509CertificateAuthenticationDefaultMode": n => { x509CertificateAuthenticationModeConfiguration.x509CertificateAuthenticationDefaultMode = n.getEnumValue<X509CertificateAuthenticationMode>(X509CertificateAuthenticationMode) as any ; },
    }
}
