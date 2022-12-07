import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PersonNamePronounciation extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The displayName property */
    displayName?: string;
    /** The first property */
    first?: string;
    /** The last property */
    last?: string;
    /** The maiden property */
    maiden?: string;
    /** The middle property */
    middle?: string;
}
