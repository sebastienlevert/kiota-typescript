import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TeamSummary extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Count of guests in a team. */
    guestsCount?: number;
    /** Count of members in a team. */
    membersCount?: number;
    /** Count of owners in a team. */
    ownersCount?: number;
}
