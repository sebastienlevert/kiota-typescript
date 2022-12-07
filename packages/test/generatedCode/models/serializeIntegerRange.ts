import {IntegerRange} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIntegerRange(writer: SerializationWriter, integerRange: IntegerRange | undefined = {}) : void {
            writer.writeNumberValue("end", integerRange.end);
            writer.writeNumberValue("maximum", integerRange.maximum);
            writer.writeNumberValue("minimum", integerRange.minimum);
            writer.writeNumberValue("start", integerRange.start);
}
