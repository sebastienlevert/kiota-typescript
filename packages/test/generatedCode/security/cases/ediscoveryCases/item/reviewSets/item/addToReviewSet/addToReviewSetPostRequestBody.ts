import {EdiscoverySearch} from '../../../../../../../models/security/';
import {AdditionalDataOptions} from '../../../../../../../models/security/additionalDataOptions';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AddToReviewSetPostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The additionalDataOptions property */
    additionalDataOptions?: AdditionalDataOptions;
    /** The search property */
    search?: EdiscoverySearch;
}
