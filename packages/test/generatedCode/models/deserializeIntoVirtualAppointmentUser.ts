import {VirtualAppointmentUser} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoVirtualAppointmentUser(virtualAppointmentUser: VirtualAppointmentUser | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { virtualAppointmentUser.displayName = n.getStringValue() as any ; },
        "emailAddress": n => { virtualAppointmentUser.emailAddress = n.getStringValue() as any ; },
        "smsCapablePhoneNumber": n => { virtualAppointmentUser.smsCapablePhoneNumber = n.getStringValue() as any ; },
    }
}
