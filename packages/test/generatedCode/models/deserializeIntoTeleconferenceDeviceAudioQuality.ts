import {deserializeIntoTeleconferenceDeviceMediaQuality} from './deserializeIntoTeleconferenceDeviceMediaQuality';
import {TeleconferenceDeviceAudioQuality} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeleconferenceDeviceAudioQuality(teleconferenceDeviceAudioQuality: TeleconferenceDeviceAudioQuality | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoTeleconferenceDeviceMediaQuality(teleconferenceDeviceAudioQuality),
    }
}
