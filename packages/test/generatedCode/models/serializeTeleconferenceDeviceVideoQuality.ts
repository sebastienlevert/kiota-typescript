import {TeleconferenceDeviceVideoQuality} from './index';
import {serializeTeleconferenceDeviceMediaQuality} from './serializeTeleconferenceDeviceMediaQuality';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeleconferenceDeviceVideoQuality(writer: SerializationWriter, teleconferenceDeviceVideoQuality: TeleconferenceDeviceVideoQuality | undefined = {}) : void {
        serializeTeleconferenceDeviceMediaQuality(writer, teleconferenceDeviceVideoQuality)
            writer.writeNumberValue("averageInboundBitRate", teleconferenceDeviceVideoQuality.averageInboundBitRate);
            writer.writeNumberValue("averageInboundFrameRate", teleconferenceDeviceVideoQuality.averageInboundFrameRate);
            writer.writeNumberValue("averageOutboundBitRate", teleconferenceDeviceVideoQuality.averageOutboundBitRate);
            writer.writeNumberValue("averageOutboundFrameRate", teleconferenceDeviceVideoQuality.averageOutboundFrameRate);
}
