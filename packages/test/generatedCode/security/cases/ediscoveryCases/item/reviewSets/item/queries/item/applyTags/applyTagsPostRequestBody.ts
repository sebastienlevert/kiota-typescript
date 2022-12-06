import {EdiscoveryReviewTag} from '../../../../../../../../../models/security/';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ApplyTagsPostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The tagsToAdd property */
    tagsToAdd?: EdiscoveryReviewTag[];
    /** The tagsToRemove property */
    tagsToRemove?: EdiscoveryReviewTag[];
}
