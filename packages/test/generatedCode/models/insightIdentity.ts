import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface InsightIdentity extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The email address of the user who shared the item. */
    address?: string;
    /** The display name of the user who shared the item. */
    displayName?: string;
    /** The id of the user who shared the item. */
    id?: string;
    /** The OdataType property */
    odataType?: string;
}
