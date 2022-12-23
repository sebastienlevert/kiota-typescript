import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ChannelSummary extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The guestsCount property */
    guestsCount?: number;
    /** The hasMembersFromOtherTenants property */
    hasMembersFromOtherTenants?: boolean;
    /** The membersCount property */
    membersCount?: number;
    /** The ownersCount property */
    ownersCount?: number;
}