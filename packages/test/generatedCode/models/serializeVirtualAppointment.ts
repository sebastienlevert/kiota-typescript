import {VirtualAppointment} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeVirtualAppointmentSettings} from './serializeVirtualAppointmentSettings';
import {serializeVirtualAppointmentUser} from './serializeVirtualAppointmentUser';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeVirtualAppointment(writer: SerializationWriter, virtualAppointment: VirtualAppointment | undefined = {}) : void {
        serializeEntity(writer, virtualAppointment)
            writer.writeStringValue("appointmentClientJoinWebUrl", virtualAppointment.appointmentClientJoinWebUrl);
            writer.writeCollectionOfObjectValuesFromMethod("appointmentClients", virtualAppointment.appointmentClients as any, serializeVirtualAppointmentUser);
            writer.writeStringValue("externalAppointmentId", virtualAppointment.externalAppointmentId);
            writer.writeStringValue("externalAppointmentUrl", virtualAppointment.externalAppointmentUrl);
            writer.writeObjectValueFromMethod("settings", virtualAppointment.settings as any, serializeVirtualAppointmentSettings);
}
