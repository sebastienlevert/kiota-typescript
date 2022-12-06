import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoUserActivity} from './deserializeIntoUserActivity';
import {ActivityHistoryItem} from './index';
import {Status} from './status';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoActivityHistoryItem(activityHistoryItem: ActivityHistoryItem | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(activityHistoryItem),
        "activeDurationSeconds": n => { activityHistoryItem.activeDurationSeconds = n.getNumberValue() as any ; },
        "activity": n => { activityHistoryItem.activity = n.getObject(deserializeIntoUserActivity) as any ; },
        "createdDateTime": n => { activityHistoryItem.createdDateTime = n.getDateValue() as any ; },
        "expirationDateTime": n => { activityHistoryItem.expirationDateTime = n.getDateValue() as any ; },
        "lastActiveDateTime": n => { activityHistoryItem.lastActiveDateTime = n.getDateValue() as any ; },
        "lastModifiedDateTime": n => { activityHistoryItem.lastModifiedDateTime = n.getDateValue() as any ; },
        "startedDateTime": n => { activityHistoryItem.startedDateTime = n.getDateValue() as any ; },
        "status": n => { activityHistoryItem.status = n.getEnumValue<Status>(Status) as any ; },
        "userTimezone": n => { activityHistoryItem.userTimezone = n.getStringValue() as any ; },
    }
}
