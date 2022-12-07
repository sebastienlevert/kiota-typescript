import {AccessReviewScheduleDefinition} from './index';
import {serializeAccessReviewInstance} from './serializeAccessReviewInstance';
import {serializeAccessReviewNotificationRecipientItem} from './serializeAccessReviewNotificationRecipientItem';
import {serializeAccessReviewReviewerScope} from './serializeAccessReviewReviewerScope';
import {serializeAccessReviewScheduleSettings} from './serializeAccessReviewScheduleSettings';
import {serializeAccessReviewScope} from './serializeAccessReviewScope';
import {serializeAccessReviewStageSettings} from './serializeAccessReviewStageSettings';
import {serializeEntity} from './serializeEntity';
import {serializeUserIdentity} from './serializeUserIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewScheduleDefinition(writer: SerializationWriter, accessReviewScheduleDefinition: AccessReviewScheduleDefinition | undefined = {}) : void {
        serializeEntity(writer, accessReviewScheduleDefinition)
            writer.writeCollectionOfObjectValuesFromMethod("additionalNotificationRecipients", accessReviewScheduleDefinition.additionalNotificationRecipients as any, serializeAccessReviewNotificationRecipientItem);
            writer.writeCollectionOfObjectValuesFromMethod("backupReviewers", accessReviewScheduleDefinition.backupReviewers as any, serializeAccessReviewReviewerScope);
            writer.writeObjectValueFromMethod("createdBy", accessReviewScheduleDefinition.createdBy as any, serializeUserIdentity);
            writer.writeDateValue("createdDateTime", accessReviewScheduleDefinition.createdDateTime);
            writer.writeStringValue("descriptionForAdmins", accessReviewScheduleDefinition.descriptionForAdmins);
            writer.writeStringValue("descriptionForReviewers", accessReviewScheduleDefinition.descriptionForReviewers);
            writer.writeStringValue("displayName", accessReviewScheduleDefinition.displayName);
            writer.writeCollectionOfObjectValuesFromMethod("fallbackReviewers", accessReviewScheduleDefinition.fallbackReviewers as any, serializeAccessReviewReviewerScope);
            writer.writeObjectValueFromMethod("instanceEnumerationScope", accessReviewScheduleDefinition.instanceEnumerationScope as any, serializeAccessReviewScope);
            writer.writeCollectionOfObjectValuesFromMethod("instances", accessReviewScheduleDefinition.instances as any, serializeAccessReviewInstance);
            writer.writeDateValue("lastModifiedDateTime", accessReviewScheduleDefinition.lastModifiedDateTime);
            writer.writeCollectionOfObjectValuesFromMethod("reviewers", accessReviewScheduleDefinition.reviewers as any, serializeAccessReviewReviewerScope);
            writer.writeObjectValueFromMethod("scope", accessReviewScheduleDefinition.scope as any, serializeAccessReviewScope);
            writer.writeObjectValueFromMethod("settings", accessReviewScheduleDefinition.settings as any, serializeAccessReviewScheduleSettings);
            writer.writeCollectionOfObjectValuesFromMethod("stageSettings", accessReviewScheduleDefinition.stageSettings as any, serializeAccessReviewStageSettings);
            writer.writeStringValue("status", accessReviewScheduleDefinition.status);
}
