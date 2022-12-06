import {AccessReviewHistoryScheduleSettings} from './index';
import {serializePatternedRecurrence} from './serializePatternedRecurrence';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewHistoryScheduleSettings(writer: SerializationWriter, accessReviewHistoryScheduleSettings: AccessReviewHistoryScheduleSettings | undefined = {}) : void {
            writer.writeStringValue("@odata.type", accessReviewHistoryScheduleSettings.odataType);
            writer.writeObjectValueFromMethod("recurrence", accessReviewHistoryScheduleSettings.recurrence as any, serializePatternedRecurrence);
            writer.writeStringValue("reportRange", accessReviewHistoryScheduleSettings.reportRange);
}
