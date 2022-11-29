import {DateTimeTimeZone} from './dateTimeTimeZone';
import {FollowupFlagStatus} from './followupFlagStatus';
import {DateTimeTimeZone, FollowupFlag} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFollowupFlag(writer: SerializationWriter, followupFlag: FollowupFlag | undefined = {}) : void {
            writer.writeObjectValue<DateTimeTimeZone>("completedDateTime", followupFlag.completedDateTime);
            writer.writeObjectValue<DateTimeTimeZone>("dueDateTime", followupFlag.dueDateTime);
            writer.writeEnumValue<FollowupFlagStatus>("flagStatus", followupFlag.flagStatus);
            writer.writeObjectValue<DateTimeTimeZone>("startDateTime", followupFlag.startDateTime);
}
