import {TimeRange} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export function deserializeIntoTimeRange(timeRange: TimeRange | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "endTime": n => { timeRange.endTime = n.getTimeOnlyValue() as any ; },
        "startTime": n => { timeRange.startTime = n.getTimeOnlyValue() as any ; },
    }
}
