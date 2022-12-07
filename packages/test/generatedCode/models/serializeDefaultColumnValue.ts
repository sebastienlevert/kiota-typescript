import {DefaultColumnValue} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDefaultColumnValue(writer: SerializationWriter, defaultColumnValue: DefaultColumnValue | undefined = {}) : void {
            writer.writeStringValue("formula", defaultColumnValue.formula);
            writer.writeStringValue("value", defaultColumnValue.value);
}
