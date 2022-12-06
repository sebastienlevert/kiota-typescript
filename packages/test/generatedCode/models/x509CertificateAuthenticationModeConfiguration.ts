import {X509CertificateRule} from './index';
import {X509CertificateAuthenticationMode} from './x509CertificateAuthenticationMode';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface X509CertificateAuthenticationModeConfiguration extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The OdataType property */
    odataType?: string;
    /** Rules are configured in addition to the authentication mode to bind a specific x509CertificateRuleType to an x509CertificateAuthenticationMode. For example, bind the policyOID with identifier 1.32.132.343 to x509CertificateMultiFactor authentication mode. */
    rules?: X509CertificateRule[];
    /** The type of strong authentication mode. The possible values are: x509CertificateSingleFactor, x509CertificateMultiFactor, unknownFutureValue. */
    x509CertificateAuthenticationDefaultMode?: X509CertificateAuthenticationMode;
}
