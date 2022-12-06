import {AccessReviewExpirationBehavior} from './accessReviewExpirationBehavior';
import {AccessPackageAssignmentReviewSettings} from './index';
import {serializeEntitlementManagementSchedule} from './serializeEntitlementManagementSchedule';
import {serializeSubjectSet} from './serializeSubjectSet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageAssignmentReviewSettings(writer: SerializationWriter, accessPackageAssignmentReviewSettings: AccessPackageAssignmentReviewSettings | undefined = {}) : void {
            writer.writeEnumValue<AccessReviewExpirationBehavior>("expirationBehavior", accessPackageAssignmentReviewSettings.expirationBehavior);
            writer.writeCollectionOfObjectValuesFromMethod("fallbackReviewers", accessPackageAssignmentReviewSettings.fallbackReviewers as any, serializeSubjectSet);
            writer.writeBooleanValue("isEnabled", accessPackageAssignmentReviewSettings.isEnabled);
            writer.writeBooleanValue("isRecommendationEnabled", accessPackageAssignmentReviewSettings.isRecommendationEnabled);
            writer.writeBooleanValue("isReviewerJustificationRequired", accessPackageAssignmentReviewSettings.isReviewerJustificationRequired);
            writer.writeBooleanValue("isSelfReview", accessPackageAssignmentReviewSettings.isSelfReview);
            writer.writeStringValue("@odata.type", accessPackageAssignmentReviewSettings.odataType);
            writer.writeCollectionOfObjectValuesFromMethod("primaryReviewers", accessPackageAssignmentReviewSettings.primaryReviewers as any, serializeSubjectSet);
            writer.writeObjectValueFromMethod("schedule", accessPackageAssignmentReviewSettings.schedule as any, serializeEntitlementManagementSchedule);
}
