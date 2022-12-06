import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SelfSignedCertificate extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The customKeyIdentifier property */
    customKeyIdentifier?: string;
    /** The displayName property */
    displayName?: string;
    /** The endDateTime property */
    endDateTime?: Date;
    /** The key property */
    key?: string;
    /** The keyId property */
    keyId?: string;
    /** The OdataType property */
    odataType?: string;
    /** The startDateTime property */
    startDateTime?: Date;
    /** The thumbprint property */
    thumbprint?: string;
    /** The type property */
    type?: string;
    /** The usage property */
    usage?: string;
}
