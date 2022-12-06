import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsInformationProtectionDataRecoveryCertificate extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Data recovery Certificate */
    certificate?: string;
    /** Data recovery Certificate description */
    description?: string;
    /** Data recovery Certificate expiration datetime */
    expirationDateTime?: Date;
    /** The OdataType property */
    odataType?: string;
    /** Data recovery Certificate subject name */
    subjectName?: string;
}
