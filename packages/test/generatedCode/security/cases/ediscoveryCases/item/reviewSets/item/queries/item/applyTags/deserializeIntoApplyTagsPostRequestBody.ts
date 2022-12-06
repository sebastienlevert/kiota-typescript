import {deserializeIntoEdiscoveryReviewTag} from '../../../../../../../../../models/security/deserializeIntoEdiscoveryReviewTag';
import {ApplyTagsPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApplyTagsPostRequestBody(applyTagsPostRequestBody: ApplyTagsPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "tagsToAdd": n => { applyTagsPostRequestBody.tagsToAdd = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEdiscoveryReviewTag) as any ; },
        "tagsToRemove": n => { applyTagsPostRequestBody.tagsToRemove = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEdiscoveryReviewTag) as any ; },
    }
}
