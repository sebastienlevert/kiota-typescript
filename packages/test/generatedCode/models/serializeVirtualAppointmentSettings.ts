import {VirtualAppointmentSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeVirtualAppointmentSettings(writer: SerializationWriter, virtualAppointmentSettings: VirtualAppointmentSettings | undefined = {}) : void {
            writer.writeBooleanValue("allowClientToJoinUsingBrowser", virtualAppointmentSettings.allowClientToJoinUsingBrowser);
}
