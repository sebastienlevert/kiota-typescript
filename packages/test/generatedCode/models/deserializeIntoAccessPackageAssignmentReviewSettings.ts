import {AccessReviewExpirationBehavior} from './accessReviewExpirationBehavior';
import {deserializeIntoEntitlementManagementSchedule} from './deserializeIntoEntitlementManagementSchedule';
import {deserializeIntoSubjectSet} from './deserializeIntoSubjectSet';
import {AccessPackageAssignmentReviewSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageAssignmentReviewSettings(accessPackageAssignmentReviewSettings: AccessPackageAssignmentReviewSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "expirationBehavior": n => { accessPackageAssignmentReviewSettings.expirationBehavior = n.getEnumValue<AccessReviewExpirationBehavior>(AccessReviewExpirationBehavior) as any ; },
        "fallbackReviewers": n => { accessPackageAssignmentReviewSettings.fallbackReviewers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSubjectSet) as any ; },
        "isEnabled": n => { accessPackageAssignmentReviewSettings.isEnabled = n.getBooleanValue() as any ; },
        "isRecommendationEnabled": n => { accessPackageAssignmentReviewSettings.isRecommendationEnabled = n.getBooleanValue() as any ; },
        "isReviewerJustificationRequired": n => { accessPackageAssignmentReviewSettings.isReviewerJustificationRequired = n.getBooleanValue() as any ; },
        "isSelfReview": n => { accessPackageAssignmentReviewSettings.isSelfReview = n.getBooleanValue() as any ; },
        "@odata.type": n => { accessPackageAssignmentReviewSettings.odataType = n.getStringValue() as any ; },
        "primaryReviewers": n => { accessPackageAssignmentReviewSettings.primaryReviewers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSubjectSet) as any ; },
        "schedule": n => { accessPackageAssignmentReviewSettings.schedule = n.getObject(deserializeIntoEntitlementManagementSchedule) as any ; },
    }
}
