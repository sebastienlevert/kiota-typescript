import {X509CertificateAuthenticationMethodConfiguration} from './index';
import {serializeAuthenticationMethodConfiguration} from './serializeAuthenticationMethodConfiguration';
import {serializeAuthenticationMethodTarget} from './serializeAuthenticationMethodTarget';
import {serializeX509CertificateAuthenticationModeConfiguration} from './serializeX509CertificateAuthenticationModeConfiguration';
import {serializeX509CertificateUserBinding} from './serializeX509CertificateUserBinding';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeX509CertificateAuthenticationMethodConfiguration(writer: SerializationWriter, x509CertificateAuthenticationMethodConfiguration: X509CertificateAuthenticationMethodConfiguration | undefined = {}) : void {
        serializeAuthenticationMethodConfiguration(writer, x509CertificateAuthenticationMethodConfiguration)
            writer.writeObjectValueFromMethod("authenticationModeConfiguration", x509CertificateAuthenticationMethodConfiguration.authenticationModeConfiguration as any, serializeX509CertificateAuthenticationModeConfiguration);
            writer.writeCollectionOfObjectValuesFromMethod("certificateUserBindings", x509CertificateAuthenticationMethodConfiguration.certificateUserBindings as any, serializeX509CertificateUserBinding);
            writer.writeCollectionOfObjectValuesFromMethod("includeTargets", x509CertificateAuthenticationMethodConfiguration.includeTargets as any, serializeAuthenticationMethodTarget);
}
