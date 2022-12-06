import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Pkcs12CertificateInformation extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Represents whether the certificate is the active certificate to be used for calling the API connector. The active certificate is the most recently uploaded certificate which is not yet expired but whose notBefore time is in the past. */
    isActive?: boolean;
    /** The certificate's expiry. This value is a NumericDate as defined in RFC 7519 (A JSON numeric value representing the number of seconds from 1970-01-01T00:00:00Z UTC until the specified UTC date/time, ignoring leap seconds.) */
    notAfter?: number;
    /** The certificate's issue time (not before). This value is a NumericDate as defined in RFC 7519 (A JSON numeric value representing the number of seconds from 1970-01-01T00:00:00Z UTC until the specified UTC date/time, ignoring leap seconds.) */
    notBefore?: number;
    /** The OdataType property */
    odataType?: string;
    /** The certificate thumbprint. */
    thumbprint?: string;
}
