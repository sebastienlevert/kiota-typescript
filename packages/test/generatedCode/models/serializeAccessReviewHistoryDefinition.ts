import {AccessReviewHistoryDecisionFilter} from './accessReviewHistoryDecisionFilter';
import {AccessReviewHistoryStatus} from './accessReviewHistoryStatus';
import {AccessReviewHistoryDefinition} from './index';
import {serializeAccessReviewHistoryInstance} from './serializeAccessReviewHistoryInstance';
import {serializeAccessReviewHistoryScheduleSettings} from './serializeAccessReviewHistoryScheduleSettings';
import {serializeAccessReviewScope} from './serializeAccessReviewScope';
import {serializeEntity} from './serializeEntity';
import {serializeUserIdentity} from './serializeUserIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewHistoryDefinition(writer: SerializationWriter, accessReviewHistoryDefinition: AccessReviewHistoryDefinition | undefined = {}) : void {
        serializeEntity(writer, accessReviewHistoryDefinition)
            writer.writeObjectValueFromMethod("createdBy", accessReviewHistoryDefinition.createdBy as any, serializeUserIdentity);
            writer.writeDateValue("createdDateTime", accessReviewHistoryDefinition.createdDateTime);
            writer.writeEnumValue<AccessReviewHistoryDecisionFilter>("decisions", accessReviewHistoryDefinition.decisions);
            writer.writeStringValue("displayName", accessReviewHistoryDefinition.displayName);
            writer.writeCollectionOfObjectValuesFromMethod("instances", accessReviewHistoryDefinition.instances as any, serializeAccessReviewHistoryInstance);
            writer.writeDateValue("reviewHistoryPeriodEndDateTime", accessReviewHistoryDefinition.reviewHistoryPeriodEndDateTime);
            writer.writeDateValue("reviewHistoryPeriodStartDateTime", accessReviewHistoryDefinition.reviewHistoryPeriodStartDateTime);
            writer.writeObjectValueFromMethod("scheduleSettings", accessReviewHistoryDefinition.scheduleSettings as any, serializeAccessReviewHistoryScheduleSettings);
            writer.writeCollectionOfObjectValuesFromMethod("scopes", accessReviewHistoryDefinition.scopes as any, serializeAccessReviewScope);
            writer.writeEnumValue<AccessReviewHistoryStatus>("status", accessReviewHistoryDefinition.status);
}
