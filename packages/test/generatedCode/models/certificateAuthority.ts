import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CertificateAuthority extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Required. The base64 encoded string representing the public certificate. */
    certificate?: string;
    /** The URL of the certificate revocation list. */
    certificateRevocationListUrl?: string;
    /** The URL contains the list of all revoked certificates since the last time a full certificate revocaton list was created. */
    deltaCertificateRevocationListUrl?: string;
    /** Required. true if the trusted certificate is a root authority, false if the trusted certificate is an intermediate authority. */
    isRootAuthority?: boolean;
    /** The issuer of the certificate, calculated from the certificate value. Read-only. */
    issuer?: string;
    /** The subject key identifier of the certificate, calculated from the certificate value. Read-only. */
    issuerSki?: string;
    /** The OdataType property */
    odataType?: string;
}
