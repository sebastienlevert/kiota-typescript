import {deserializeIntoPatternedRecurrence} from './deserializeIntoPatternedRecurrence';
import {AccessReviewHistoryScheduleSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewHistoryScheduleSettings(accessReviewHistoryScheduleSettings: AccessReviewHistoryScheduleSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { accessReviewHistoryScheduleSettings.odataType = n.getStringValue() as any ; },
        "recurrence": n => { accessReviewHistoryScheduleSettings.recurrence = n.getObject(deserializeIntoPatternedRecurrence) as any ; },
        "reportRange": n => { accessReviewHistoryScheduleSettings.reportRange = n.getStringValue() as any ; },
    }
}
