import {AdditionalDataOptions} from '../../../../../../../models/security/additionalDataOptions';
import {serializeEdiscoverySearch} from '../../../../../../../models/security/serializeEdiscoverySearch';
import {AddToReviewSetPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddToReviewSetPostRequestBody(writer: SerializationWriter, addToReviewSetPostRequestBody: AddToReviewSetPostRequestBody | undefined = {}) : void {
            writer.writeEnumValue<AdditionalDataOptions>("additionalDataOptions", addToReviewSetPostRequestBody.additionalDataOptions);
            writer.writeObjectValueFromMethod("search", addToReviewSetPostRequestBody.search as any, serializeEdiscoverySearch);
}
