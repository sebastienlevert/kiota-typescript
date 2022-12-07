import {VirtualAppointmentUser} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeVirtualAppointmentUser(writer: SerializationWriter, virtualAppointmentUser: VirtualAppointmentUser | undefined = {}) : void {
            writer.writeStringValue("displayName", virtualAppointmentUser.displayName);
            writer.writeStringValue("emailAddress", virtualAppointmentUser.emailAddress);
            writer.writeStringValue("smsCapablePhoneNumber", virtualAppointmentUser.smsCapablePhoneNumber);
}
