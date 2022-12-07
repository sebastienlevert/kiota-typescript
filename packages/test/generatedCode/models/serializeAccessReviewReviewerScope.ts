import {AccessReviewReviewerScope} from './index';
import {serializeAccessReviewScope} from './serializeAccessReviewScope';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewReviewerScope(writer: SerializationWriter, accessReviewReviewerScope: AccessReviewReviewerScope | undefined = {}) : void {
        serializeAccessReviewScope(writer, accessReviewReviewerScope)
            writer.writeStringValue("query", accessReviewReviewerScope.query);
            writer.writeStringValue("queryRoot", accessReviewReviewerScope.queryRoot);
            writer.writeStringValue("queryType", accessReviewReviewerScope.queryType);
}
