import {deserializeIntoChangeTrackedEntity} from './deserializeIntoChangeTrackedEntity';
import {TimeOffReason} from './index';
import {TimeOffReasonIconType} from './timeOffReasonIconType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTimeOffReason(timeOffReason: TimeOffReason | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoChangeTrackedEntity(timeOffReason),
        "displayName": n => { timeOffReason.displayName = n.getStringValue() as any ; },
        "iconType": n => { timeOffReason.iconType = n.getEnumValue<TimeOffReasonIconType>(TimeOffReasonIconType) as any ; },
        "isActive": n => { timeOffReason.isActive = n.getBooleanValue() as any ; },
    }
}
