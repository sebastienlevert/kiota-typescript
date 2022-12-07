import {deserializeIntoRecurrencePattern} from './deserializeIntoRecurrencePattern';
import {deserializeIntoRecurrenceRange} from './deserializeIntoRecurrenceRange';
import {PatternedRecurrence} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPatternedRecurrence(patternedRecurrence: PatternedRecurrence | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "pattern": n => { patternedRecurrence.pattern = n.getObject(deserializeIntoRecurrencePattern) as any ; },
        "range": n => { patternedRecurrence.range = n.getObject(deserializeIntoRecurrenceRange) as any ; },
    }
}
