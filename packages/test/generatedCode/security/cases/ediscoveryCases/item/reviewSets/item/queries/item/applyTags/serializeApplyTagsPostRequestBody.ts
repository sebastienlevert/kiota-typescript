import {serializeEdiscoveryReviewTag} from '../../../../../../../../../models/security/serializeEdiscoveryReviewTag';
import {ApplyTagsPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApplyTagsPostRequestBody(writer: SerializationWriter, applyTagsPostRequestBody: ApplyTagsPostRequestBody | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("tagsToAdd", applyTagsPostRequestBody.tagsToAdd as any, serializeEdiscoveryReviewTag);
            writer.writeCollectionOfObjectValuesFromMethod("tagsToRemove", applyTagsPostRequestBody.tagsToRemove as any, serializeEdiscoveryReviewTag);
}
