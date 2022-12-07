import {Entity, VirtualAppointmentSettings, VirtualAppointmentUser} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface VirtualAppointment extends Entity, Partial<Parsable> {
    /** The join web URL of the virtual appointment for clients with waiting room and browser join. Optional. */
    appointmentClientJoinWebUrl?: string;
    /** The client information for the virtual appointment, including name, email, and SMS phone number. Optional. */
    appointmentClients?: VirtualAppointmentUser[];
    /** The identifier of the appointment from the scheduling system, associated with the current virtual appointment. Optional. */
    externalAppointmentId?: string;
    /** The URL of the appointment resource from the scheduling system, associated with the current virtual appointment. Optional. */
    externalAppointmentUrl?: string;
    /** The settings property */
    settings?: VirtualAppointmentSettings;
}
