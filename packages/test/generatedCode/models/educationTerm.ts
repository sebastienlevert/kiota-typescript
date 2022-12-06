import {AdditionalDataHolder, DateOnly, Parsable} from '@microsoft/kiota-abstractions';

export interface EducationTerm extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Display name of the term. */
    displayName?: string;
    /** End of the term. */
    endDate?: DateOnly;
    /** ID of term in the syncing system. */
    externalId?: string;
    /** The OdataType property */
    odataType?: string;
    /** Start of the term. */
    startDate?: DateOnly;
}
