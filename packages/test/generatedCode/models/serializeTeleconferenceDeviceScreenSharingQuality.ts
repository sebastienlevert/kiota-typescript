import {TeleconferenceDeviceScreenSharingQuality} from './index';
import {serializeTeleconferenceDeviceVideoQuality} from './serializeTeleconferenceDeviceVideoQuality';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeleconferenceDeviceScreenSharingQuality(writer: SerializationWriter, teleconferenceDeviceScreenSharingQuality: TeleconferenceDeviceScreenSharingQuality | undefined = {}) : void {
        serializeTeleconferenceDeviceVideoQuality(writer, teleconferenceDeviceScreenSharingQuality)
}
