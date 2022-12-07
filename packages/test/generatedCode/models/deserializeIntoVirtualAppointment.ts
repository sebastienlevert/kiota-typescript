import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoVirtualAppointmentSettings} from './deserializeIntoVirtualAppointmentSettings';
import {deserializeIntoVirtualAppointmentUser} from './deserializeIntoVirtualAppointmentUser';
import {VirtualAppointment} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoVirtualAppointment(virtualAppointment: VirtualAppointment | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(virtualAppointment),
        "appointmentClientJoinWebUrl": n => { virtualAppointment.appointmentClientJoinWebUrl = n.getStringValue() as any ; },
        "appointmentClients": n => { virtualAppointment.appointmentClients = n.getCollectionOfObjectValuesFromMethod(deserializeIntoVirtualAppointmentUser) as any ; },
        "externalAppointmentId": n => { virtualAppointment.externalAppointmentId = n.getStringValue() as any ; },
        "externalAppointmentUrl": n => { virtualAppointment.externalAppointmentUrl = n.getStringValue() as any ; },
        "settings": n => { virtualAppointment.settings = n.getObject(deserializeIntoVirtualAppointmentSettings) as any ; },
    }
}
