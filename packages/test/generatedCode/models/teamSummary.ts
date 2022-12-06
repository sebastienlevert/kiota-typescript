import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TeamSummary extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The guestsCount property */
    guestsCount?: number;
    /** The membersCount property */
    membersCount?: number;
    /** The OdataType property */
    odataType?: string;
    /** The ownersCount property */
    ownersCount?: number;
}
