import {AutomaticRepliesMailTips} from './index';
import {serializeDateTimeTimeZone} from './serializeDateTimeTimeZone';
import {serializeLocaleInfo} from './serializeLocaleInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAutomaticRepliesMailTips(writer: SerializationWriter, automaticRepliesMailTips: AutomaticRepliesMailTips | undefined = {}) : void {
            writer.writeStringValue("message", automaticRepliesMailTips.message);
            writer.writeObjectValueFromMethod("messageLanguage", automaticRepliesMailTips.messageLanguage as any, serializeLocaleInfo);
            writer.writeStringValue("@odata.type", automaticRepliesMailTips.odataType);
            writer.writeObjectValueFromMethod("scheduledEndTime", automaticRepliesMailTips.scheduledEndTime as any, serializeDateTimeTimeZone);
            writer.writeObjectValueFromMethod("scheduledStartTime", automaticRepliesMailTips.scheduledStartTime as any, serializeDateTimeTimeZone);
}
