import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DriveRecipient extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The alias of the domain object, for cases where an email address is unavailable (e.g. security groups). */
    alias?: string;
    /** The email address for the recipient, if the recipient has an associated email address. */
    email?: string;
    /** The unique identifier for the recipient in the directory. */
    objectId?: string;
    /** The OdataType property */
    odataType?: string;
}
