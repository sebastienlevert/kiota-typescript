import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TeamDiscoverySettings extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** If set to true, the team is visible via search and suggestions from the Teams client. */
    showInTeamsSearchAndSuggestions?: boolean;
}
