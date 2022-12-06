import {PatternedRecurrence} from './index';
import {serializeRecurrencePattern} from './serializeRecurrencePattern';
import {serializeRecurrenceRange} from './serializeRecurrenceRange';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePatternedRecurrence(writer: SerializationWriter, patternedRecurrence: PatternedRecurrence | undefined = {}) : void {
            writer.writeStringValue("@odata.type", patternedRecurrence.odataType);
            writer.writeObjectValueFromMethod("pattern", patternedRecurrence.pattern as any, serializeRecurrencePattern);
            writer.writeObjectValueFromMethod("range", patternedRecurrence.range as any, serializeRecurrenceRange);
}
