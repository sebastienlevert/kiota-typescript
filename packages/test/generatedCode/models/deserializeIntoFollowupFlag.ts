import {deserializeIntoDateTimeTimeZone} from './deserializeIntoDateTimeTimeZone';
import {FollowupFlagStatus} from './followupFlagStatus';
import {FollowupFlag} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFollowupFlag(followupFlag: FollowupFlag | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "completedDateTime": n => { followupFlag.completedDateTime = n.getObject(deserializeIntoDateTimeTimeZone) as any ; },
        "dueDateTime": n => { followupFlag.dueDateTime = n.getObject(deserializeIntoDateTimeTimeZone) as any ; },
        "flagStatus": n => { followupFlag.flagStatus = n.getEnumValue<FollowupFlagStatus>(FollowupFlagStatus) as any ; },
        "startDateTime": n => { followupFlag.startDateTime = n.getObject(deserializeIntoDateTimeTimeZone) as any ; },
    }
}
