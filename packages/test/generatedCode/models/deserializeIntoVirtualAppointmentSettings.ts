import {VirtualAppointmentSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoVirtualAppointmentSettings(virtualAppointmentSettings: VirtualAppointmentSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "allowClientToJoinUsingBrowser": n => { virtualAppointmentSettings.allowClientToJoinUsingBrowser = n.getBooleanValue() as any ; },
    }
}
