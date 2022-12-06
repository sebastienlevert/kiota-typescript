import {AuthenticationMethodConfiguration, AuthenticationMethodTarget, X509CertificateAuthenticationModeConfiguration, X509CertificateUserBinding} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface X509CertificateAuthenticationMethodConfiguration extends AuthenticationMethodConfiguration, Partial<Parsable> {
    /** Defines strong authentication configurations. This configuration includes the default authentication mode and the different rules for strong authentication bindings. */
    authenticationModeConfiguration?: X509CertificateAuthenticationModeConfiguration;
    /** Defines fields in the X.509 certificate that map to attributes of the Azure AD user object in order to bind the certificate to the user. The priority of the object determines the order in which the binding is carried out. The first binding that matches will be used and the rest ignored. */
    certificateUserBindings?: X509CertificateUserBinding[];
    /** A collection of users or groups who are enabled to use the authentication method. */
    includeTargets?: AuthenticationMethodTarget[];
}
