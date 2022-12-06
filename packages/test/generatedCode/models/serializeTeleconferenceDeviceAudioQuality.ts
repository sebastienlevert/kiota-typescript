import {TeleconferenceDeviceAudioQuality} from './index';
import {serializeTeleconferenceDeviceMediaQuality} from './serializeTeleconferenceDeviceMediaQuality';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeleconferenceDeviceAudioQuality(writer: SerializationWriter, teleconferenceDeviceAudioQuality: TeleconferenceDeviceAudioQuality | undefined = {}) : void {
        serializeTeleconferenceDeviceMediaQuality(writer, teleconferenceDeviceAudioQuality)
}
