import {AccessReviewInstanceDecisionItem} from './index';
import {serializeAccessReviewInstance} from './serializeAccessReviewInstance';
import {serializeAccessReviewInstanceDecisionItemResource} from './serializeAccessReviewInstanceDecisionItemResource';
import {serializeAccessReviewInstanceDecisionItemTarget} from './serializeAccessReviewInstanceDecisionItemTarget';
import {serializeDecisionItemPrincipalResourceMembership} from './serializeDecisionItemPrincipalResourceMembership';
import {serializeEntity} from './serializeEntity';
import {serializeGovernanceInsight} from './serializeGovernanceInsight';
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
            writer.writeCollectionOfObjectValuesFromMethod("insights", accessReviewInstanceDecisionItem.insights as any, serializeGovernanceInsight);
            writer.writeObjectValueFromMethod("instance", accessReviewInstanceDecisionItem.instance as any, serializeAccessReviewInstance);
            writer.writeStringValue("justification", accessReviewInstanceDecisionItem.justification);
            writer.writeObjectValueFromMethod("principal", accessReviewInstanceDecisionItem.principal as any, serializeIdentity);
            writer.writeStringValue("principalLink", accessReviewInstanceDecisionItem.principalLink);
            writer.writeObjectValueFromMethod("principalResourceMembership", accessReviewInstanceDecisionItem.principalResourceMembership as any, serializeDecisionItemPrincipalResourceMembership);
            writer.writeStringValue("recommendation", accessReviewInstanceDecisionItem.recommendation);
            writer.writeObjectValueFromMethod("resource", accessReviewInstanceDecisionItem.resource as any, serializeAccessReviewInstanceDecisionItemResource);
            writer.writeStringValue("resourceLink", accessReviewInstanceDecisionItem.resourceLink);
            writer.writeObjectValueFromMethod("reviewedBy", accessReviewInstanceDecisionItem.reviewedBy as any, serializeUserIdentity);
            writer.writeDateValue("reviewedDateTime", accessReviewInstanceDecisionItem.reviewedDateTime);
            writer.writeObjectValueFromMethod("target", accessReviewInstanceDecisionItem.target as any, serializeAccessReviewInstanceDecisionItemTarget);
}
