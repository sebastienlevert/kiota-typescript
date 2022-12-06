import {AccessReviewInstanceDecisionItemResource} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewInstanceDecisionItemResource(writer: SerializationWriter, accessReviewInstanceDecisionItemResource: AccessReviewInstanceDecisionItemResource | undefined = {}) : void {
            writer.writeStringValue("displayName", accessReviewInstanceDecisionItemResource.displayName);
            writer.writeStringValue("id", accessReviewInstanceDecisionItemResource.id);
            writer.writeStringValue("@odata.type", accessReviewInstanceDecisionItemResource.odataType);
            writer.writeStringValue("type", accessReviewInstanceDecisionItemResource.type);
}
