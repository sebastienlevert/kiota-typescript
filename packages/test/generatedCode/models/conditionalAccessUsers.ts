import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessUsers extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Group IDs excluded from scope of policy. */
    excludeGroups?: string[];
    /** Role IDs excluded from scope of policy. */
    excludeRoles?: string[];
    /** User IDs excluded from scope of policy and/or GuestsOrExternalUsers. */
    excludeUsers?: string[];
    /** Group IDs in scope of policy unless explicitly excluded, or All. */
    includeGroups?: string[];
    /** Role IDs in scope of policy unless explicitly excluded, or All. */
    includeRoles?: string[];
    /** User IDs in scope of policy unless explicitly excluded, or None or All or GuestsOrExternalUsers. */
    includeUsers?: string[];
    /** The OdataType property */
    odataType?: string;
}
