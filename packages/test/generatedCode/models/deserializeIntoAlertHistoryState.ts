import {AlertFeedback} from './alertFeedback';
import {AlertStatus} from './alertStatus';
import {AlertHistoryState} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAlertHistoryState(alertHistoryState: AlertHistoryState | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "appId": n => { alertHistoryState.appId = n.getStringValue() as any ; },
        "assignedTo": n => { alertHistoryState.assignedTo = n.getStringValue() as any ; },
        "comments": n => { alertHistoryState.comments = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "feedback": n => { alertHistoryState.feedback = n.getEnumValue<AlertFeedback>(AlertFeedback) as any ; },
        "@odata.type": n => { alertHistoryState.odataType = n.getStringValue() as any ; },
        "status": n => { alertHistoryState.status = n.getEnumValue<AlertStatus>(AlertStatus) as any ; },
        "updatedDateTime": n => { alertHistoryState.updatedDateTime = n.getDateValue() as any ; },
        "user": n => { alertHistoryState.user = n.getStringValue() as any ; },
    }
}
