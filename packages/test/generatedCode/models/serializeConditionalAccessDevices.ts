import {ConditionalAccessDevices} from './index';
import {serializeConditionalAccessFilter} from './serializeConditionalAccessFilter';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessDevices(writer: SerializationWriter, conditionalAccessDevices: ConditionalAccessDevices | undefined = {}) : void {
            writer.writeObjectValueFromMethod("deviceFilter", conditionalAccessDevices.deviceFilter as any, serializeConditionalAccessFilter);
            writer.writeStringValue("@odata.type", conditionalAccessDevices.odataType);
}
