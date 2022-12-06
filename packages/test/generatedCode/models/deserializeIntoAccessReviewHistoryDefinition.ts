import {AccessReviewHistoryDecisionFilter} from './accessReviewHistoryDecisionFilter';
import {AccessReviewHistoryStatus} from './accessReviewHistoryStatus';
import {deserializeIntoAccessReviewHistoryInstance} from './deserializeIntoAccessReviewHistoryInstance';
import {deserializeIntoAccessReviewHistoryScheduleSettings} from './deserializeIntoAccessReviewHistoryScheduleSettings';
import {deserializeIntoAccessReviewScope} from './deserializeIntoAccessReviewScope';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoUserIdentity} from './deserializeIntoUserIdentity';
import {AccessReviewHistoryDefinition} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewHistoryDefinition(accessReviewHistoryDefinition: AccessReviewHistoryDefinition | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(accessReviewHistoryDefinition),
        "createdBy": n => { accessReviewHistoryDefinition.createdBy = n.getObject(deserializeIntoUserIdentity) as any ; },
        "createdDateTime": n => { accessReviewHistoryDefinition.createdDateTime = n.getDateValue() as any ; },
        "decisions": n => { accessReviewHistoryDefinition.decisions = n.getEnumValues<AccessReviewHistoryDecisionFilter>(AccessReviewHistoryDecisionFilter) as any ; },
        "displayName": n => { accessReviewHistoryDefinition.displayName = n.getStringValue() as any ; },
        "instances": n => { accessReviewHistoryDefinition.instances = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessReviewHistoryInstance) as any ; },
        "reviewHistoryPeriodEndDateTime": n => { accessReviewHistoryDefinition.reviewHistoryPeriodEndDateTime = n.getDateValue() as any ; },
        "reviewHistoryPeriodStartDateTime": n => { accessReviewHistoryDefinition.reviewHistoryPeriodStartDateTime = n.getDateValue() as any ; },
        "scheduleSettings": n => { accessReviewHistoryDefinition.scheduleSettings = n.getObject(deserializeIntoAccessReviewHistoryScheduleSettings) as any ; },
        "scopes": n => { accessReviewHistoryDefinition.scopes = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessReviewScope) as any ; },
        "status": n => { accessReviewHistoryDefinition.status = n.getEnumValue<AccessReviewHistoryStatus>(AccessReviewHistoryStatus) as any ; },
    }
}
