import {deserializeIntoActivityHistoryItem} from './deserializeIntoActivityHistoryItem';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoJson} from './deserializeIntoJson';
import {deserializeIntoVisualInfo} from './deserializeIntoVisualInfo';
import {UserActivity} from './index';
import {Status} from './status';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserActivity(userActivity: UserActivity | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userActivity),
        "activationUrl": n => { userActivity.activationUrl = n.getStringValue() as any ; },
        "activitySourceHost": n => { userActivity.activitySourceHost = n.getStringValue() as any ; },
        "appActivityId": n => { userActivity.appActivityId = n.getStringValue() as any ; },
        "appDisplayName": n => { userActivity.appDisplayName = n.getStringValue() as any ; },
        "contentInfo": n => { userActivity.contentInfo = n.getObject(deserializeIntoJson) as any ; },
        "contentUrl": n => { userActivity.contentUrl = n.getStringValue() as any ; },
        "createdDateTime": n => { userActivity.createdDateTime = n.getDateValue() as any ; },
        "expirationDateTime": n => { userActivity.expirationDateTime = n.getDateValue() as any ; },
        "fallbackUrl": n => { userActivity.fallbackUrl = n.getStringValue() as any ; },
        "historyItems": n => { userActivity.historyItems = n.getCollectionOfObjectValuesFromMethod(deserializeIntoActivityHistoryItem) as any ; },
        "lastModifiedDateTime": n => { userActivity.lastModifiedDateTime = n.getDateValue() as any ; },
        "status": n => { userActivity.status = n.getEnumValue<Status>(Status) as any ; },
        "userTimezone": n => { userActivity.userTimezone = n.getStringValue() as any ; },
        "visualElements": n => { userActivity.visualElements = n.getObject(deserializeIntoVisualInfo) as any ; },
    }
}
