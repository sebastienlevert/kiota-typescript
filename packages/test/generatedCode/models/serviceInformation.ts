import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ServiceInformation extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The name of the cloud service (for example, Twitter, Instagram). */
    name?: string;
    /** Contains the URL for the service being referenced. */
    webUrl?: string;
}
