import {ConditionalAccessSessionControl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessSessionControl(writer: SerializationWriter, conditionalAccessSessionControl: ConditionalAccessSessionControl | undefined = {}) : void {
            writer.writeBooleanValue("isEnabled", conditionalAccessSessionControl.isEnabled);
            writer.writeStringValue("@odata.type", conditionalAccessSessionControl.odataType);
}
