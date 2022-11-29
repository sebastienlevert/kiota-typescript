import {DateTimeTimeZone} from './dateTimeTimeZone';
import {FollowupFlagStatus} from './followupFlagStatus';
import {DateTimeTimeZone, FollowupFlag} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFollowupFlag(followupFlag: FollowupFlag | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "completedDateTime": n => { followupFlag.completedDateTime = n.deserializeIntoDateTimeTimeZoneInterface(); },
        "dueDateTime": n => { followupFlag.dueDateTime = n.deserializeIntoDateTimeTimeZoneInterface(); },
        "flagStatus": n => { followupFlag.flagStatus = n.getEnumValue<FollowupFlagStatus>(FollowupFlagStatus); },
        "startDateTime": n => { followupFlag.startDateTime = n.deserializeIntoDateTimeTimeZoneInterface(); },
    }
}
