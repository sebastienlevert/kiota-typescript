import {deserializeIntoAccessReviewInstance} from './deserializeIntoAccessReviewInstance';
import {deserializeIntoAccessReviewNotificationRecipientItem} from './deserializeIntoAccessReviewNotificationRecipientItem';
import {deserializeIntoAccessReviewReviewerScope} from './deserializeIntoAccessReviewReviewerScope';
import {deserializeIntoAccessReviewScheduleSettings} from './deserializeIntoAccessReviewScheduleSettings';
import {deserializeIntoAccessReviewScope} from './deserializeIntoAccessReviewScope';
import {deserializeIntoAccessReviewStageSettings} from './deserializeIntoAccessReviewStageSettings';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoUserIdentity} from './deserializeIntoUserIdentity';
import {AccessReviewScheduleDefinition} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewScheduleDefinition(accessReviewScheduleDefinition: AccessReviewScheduleDefinition | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(accessReviewScheduleDefinition),
        "additionalNotificationRecipients": n => { accessReviewScheduleDefinition.additionalNotificationRecipients = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessReviewNotificationRecipientItem) as any ; },
        "backupReviewers": n => { accessReviewScheduleDefinition.backupReviewers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessReviewReviewerScope) as any ; },
        "createdBy": n => { accessReviewScheduleDefinition.createdBy = n.getObject(deserializeIntoUserIdentity) as any ; },
        "createdDateTime": n => { accessReviewScheduleDefinition.createdDateTime = n.getDateValue() as any ; },
        "descriptionForAdmins": n => { accessReviewScheduleDefinition.descriptionForAdmins = n.getStringValue() as any ; },
        "descriptionForReviewers": n => { accessReviewScheduleDefinition.descriptionForReviewers = n.getStringValue() as any ; },
        "displayName": n => { accessReviewScheduleDefinition.displayName = n.getStringValue() as any ; },
        "fallbackReviewers": n => { accessReviewScheduleDefinition.fallbackReviewers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessReviewReviewerScope) as any ; },
        "instanceEnumerationScope": n => { accessReviewScheduleDefinition.instanceEnumerationScope = n.getObject(deserializeIntoAccessReviewScope) as any ; },
        "instances": n => { accessReviewScheduleDefinition.instances = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessReviewInstance) as any ; },
        "lastModifiedDateTime": n => { accessReviewScheduleDefinition.lastModifiedDateTime = n.getDateValue() as any ; },
        "reviewers": n => { accessReviewScheduleDefinition.reviewers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessReviewReviewerScope) as any ; },
        "scope": n => { accessReviewScheduleDefinition.scope = n.getObject(deserializeIntoAccessReviewScope) as any ; },
        "settings": n => { accessReviewScheduleDefinition.settings = n.getObject(deserializeIntoAccessReviewScheduleSettings) as any ; },
        "stageSettings": n => { accessReviewScheduleDefinition.stageSettings = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessReviewStageSettings) as any ; },
        "status": n => { accessReviewScheduleDefinition.status = n.getStringValue() as any ; },
    }
}
