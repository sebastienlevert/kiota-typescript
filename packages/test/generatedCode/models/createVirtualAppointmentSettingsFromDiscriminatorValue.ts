import {VirtualAppointmentSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVirtualAppointmentSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : VirtualAppointmentSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new VirtualAppointmentSettings();
}
