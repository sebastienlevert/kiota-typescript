import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Certification extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** URL that shows certification details for the application. */
    certificationDetailsUrl?: string;
    /** The timestamp when the current certification for the application will expire. */
    certificationExpirationDateTime?: Date;
    /** Indicates whether the application is certified by Microsoft. */
    isCertifiedByMicrosoft?: boolean;
    /** Indicates whether the application has been self-attested by the application developer or the publisher. */
    isPublisherAttested?: boolean;
    /** The timestamp when the certification for the application was most recently added or updated. */
    lastCertificationDateTime?: Date;
    /** The OdataType property */
    odataType?: string;
}
