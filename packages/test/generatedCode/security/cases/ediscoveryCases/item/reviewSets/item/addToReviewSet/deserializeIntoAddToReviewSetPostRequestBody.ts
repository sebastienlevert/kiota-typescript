import {AdditionalDataOptions} from '../../../../../../../models/security/additionalDataOptions';
import {deserializeIntoEdiscoverySearch} from '../../../../../../../models/security/deserializeIntoEdiscoverySearch';
import {AddToReviewSetPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddToReviewSetPostRequestBody(addToReviewSetPostRequestBody: AddToReviewSetPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "additionalDataOptions": n => { addToReviewSetPostRequestBody.additionalDataOptions = n.getEnumValue<AdditionalDataOptions>(AdditionalDataOptions) as any ; },
        "search": n => { addToReviewSetPostRequestBody.search = n.getObject(deserializeIntoEdiscoverySearch) as any ; },
    }
}
