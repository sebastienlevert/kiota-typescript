import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MentionsPreview extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** True if the signed-in user is mentioned in the parent resource instance. Read-only. Supports filter. */
    isMentioned?: boolean;
}
