import {deserializeIntoTeleconferenceDeviceVideoQuality} from './deserializeIntoTeleconferenceDeviceVideoQuality';
import {TeleconferenceDeviceScreenSharingQuality} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeleconferenceDeviceScreenSharingQuality(teleconferenceDeviceScreenSharingQuality: TeleconferenceDeviceScreenSharingQuality | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoTeleconferenceDeviceVideoQuality(teleconferenceDeviceScreenSharingQuality),
    }
}
