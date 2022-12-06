import {AccessReviewQueryScope} from './index';
import {serializeAccessReviewScope} from './serializeAccessReviewScope';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewQueryScope(writer: SerializationWriter, accessReviewQueryScope: AccessReviewQueryScope | undefined = {}) : void {
        serializeAccessReviewScope(writer, accessReviewQueryScope)
            writer.writeStringValue("query", accessReviewQueryScope.query);
            writer.writeStringValue("queryRoot", accessReviewQueryScope.queryRoot);
            writer.writeStringValue("queryType", accessReviewQueryScope.queryType);
}
