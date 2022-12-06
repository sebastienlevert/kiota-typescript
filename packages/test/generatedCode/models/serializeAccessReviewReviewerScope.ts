import {AccessReviewReviewerScope} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewReviewerScope(writer: SerializationWriter, accessReviewReviewerScope: AccessReviewReviewerScope | undefined = {}) : void {
            writer.writeStringValue("@odata.type", accessReviewReviewerScope.odataType);
            writer.writeStringValue("query", accessReviewReviewerScope.query);
            writer.writeStringValue("queryRoot", accessReviewReviewerScope.queryRoot);
            writer.writeStringValue("queryType", accessReviewReviewerScope.queryType);
}
