import {AutomaticRepliesStatus} from './automaticRepliesStatus';
import {ExternalAudienceScope} from './externalAudienceScope';
import {AutomaticRepliesSetting} from './index';
import {serializeDateTimeTimeZone} from './serializeDateTimeTimeZone';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAutomaticRepliesSetting(writer: SerializationWriter, automaticRepliesSetting: AutomaticRepliesSetting | undefined = {}) : void {
            writer.writeEnumValue<ExternalAudienceScope>("externalAudience", automaticRepliesSetting.externalAudience);
            writer.writeStringValue("externalReplyMessage", automaticRepliesSetting.externalReplyMessage);
            writer.writeStringValue("internalReplyMessage", automaticRepliesSetting.internalReplyMessage);
            writer.writeObjectValueFromMethod("scheduledEndDateTime", automaticRepliesSetting.scheduledEndDateTime as any, serializeDateTimeTimeZone);
            writer.writeObjectValueFromMethod("scheduledStartDateTime", automaticRepliesSetting.scheduledStartDateTime as any, serializeDateTimeTimeZone);
            writer.writeEnumValue<AutomaticRepliesStatus>("status", automaticRepliesSetting.status);
}
