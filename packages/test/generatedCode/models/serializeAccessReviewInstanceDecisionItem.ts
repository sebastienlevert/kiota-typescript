import {AccessReviewInstanceDecisionItem} from './index';
import {serializeAccessReviewInstanceDecisionItemResource} from './serializeAccessReviewInstanceDecisionItemResource';
import {serializeEntity} from './serializeEntity';
import {serializeIdentity} from './serializeIdentity';
import {serializeUserIdentity} from './serializeUserIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewInstanceDecisionItem(writer: SerializationWriter, accessReviewInstanceDecisionItem: AccessReviewInstanceDecisionItem | undefined = {}) : void {
        serializeEntity(writer, accessReviewInstanceDecisionItem)
            writer.writeStringValue("accessReviewId", accessReviewInstanceDecisionItem.accessReviewId);
            writer.writeObjectValueFromMethod("appliedBy", accessReviewInstanceDecisionItem.appliedBy as any, serializeUserIdentity);
            writer.writeDateValue("appliedDateTime", accessReviewInstanceDecisionItem.appliedDateTime);
            writer.writeStringValue("applyResult", accessReviewInstanceDecisionItem.applyResult);
            writer.writeStringValue("decision", accessReviewInstanceDecisionItem.decision);
            writer.writeStringValue("justification", accessReviewInstanceDecisionItem.justification);
            writer.writeObjectValueFromMethod("principal", accessReviewInstanceDecisionItem.principal as any, serializeIdentity);
            writer.writeStringValue("principalLink", accessReviewInstanceDecisionItem.principalLink);
            writer.writeStringValue("recommendation", accessReviewInstanceDecisionItem.recommendation);
            writer.writeObjectValueFromMethod("resource", accessReviewInstanceDecisionItem.resource as any, serializeAccessReviewInstanceDecisionItemResource);
            writer.writeStringValue("resourceLink", accessReviewInstanceDecisionItem.resourceLink);
            writer.writeObjectValueFromMethod("reviewedBy", accessReviewInstanceDecisionItem.reviewedBy as any, serializeUserIdentity);
            writer.writeDateValue("reviewedDateTime", accessReviewInstanceDecisionItem.reviewedDateTime);
}
