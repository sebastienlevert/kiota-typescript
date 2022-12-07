import {VirtualAppointment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVirtualAppointmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : VirtualAppointment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new VirtualAppointment();
}
