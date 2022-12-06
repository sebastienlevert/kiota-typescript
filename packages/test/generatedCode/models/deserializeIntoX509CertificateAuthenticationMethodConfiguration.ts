import {deserializeIntoAuthenticationMethodConfiguration} from './deserializeIntoAuthenticationMethodConfiguration';
import {deserializeIntoAuthenticationMethodTarget} from './deserializeIntoAuthenticationMethodTarget';
import {deserializeIntoX509CertificateAuthenticationModeConfiguration} from './deserializeIntoX509CertificateAuthenticationModeConfiguration';
import {deserializeIntoX509CertificateUserBinding} from './deserializeIntoX509CertificateUserBinding';
import {X509CertificateAuthenticationMethodConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoX509CertificateAuthenticationMethodConfiguration(x509CertificateAuthenticationMethodConfiguration: X509CertificateAuthenticationMethodConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAuthenticationMethodConfiguration(x509CertificateAuthenticationMethodConfiguration),
        "authenticationModeConfiguration": n => { x509CertificateAuthenticationMethodConfiguration.authenticationModeConfiguration = n.getObject(deserializeIntoX509CertificateAuthenticationModeConfiguration) as any ; },
        "certificateUserBindings": n => { x509CertificateAuthenticationMethodConfiguration.certificateUserBindings = n.getCollectionOfObjectValuesFromMethod(deserializeIntoX509CertificateUserBinding) as any ; },
        "includeTargets": n => { x509CertificateAuthenticationMethodConfiguration.includeTargets = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAuthenticationMethodTarget) as any ; },
    }
}
