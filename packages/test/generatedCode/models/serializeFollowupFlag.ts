import {FollowupFlagStatus} from './followupFlagStatus';
import {FollowupFlag} from './index';
import {serializeDateTimeTimeZone} from './serializeDateTimeTimeZone';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFollowupFlag(writer: SerializationWriter, followupFlag: FollowupFlag | undefined = {}) : void {
            writer.writeObjectValue("completedDateTime", followupFlag.completedDateTime as any, serializeDateTimeTimeZone);
            writer.writeObjectValue("dueDateTime", followupFlag.dueDateTime as any, serializeDateTimeTimeZone);
            writer.writeEnumValue<FollowupFlagStatus>("flagStatus", followupFlag.flagStatus);
            writer.writeObjectValue("startDateTime", followupFlag.startDateTime as any, serializeDateTimeTimeZone);
}
