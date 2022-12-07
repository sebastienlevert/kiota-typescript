import {ScheduleEntity} from './index';
import {ScheduleEntityTheme} from './scheduleEntityTheme';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoScheduleEntity(scheduleEntity: ScheduleEntity | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "endDateTime": n => { scheduleEntity.endDateTime = n.getDateValue() as any ; },
        "startDateTime": n => { scheduleEntity.startDateTime = n.getDateValue() as any ; },
        "theme": n => { scheduleEntity.theme = n.getEnumValue<ScheduleEntityTheme>(ScheduleEntityTheme) as any ; },
    }
}
