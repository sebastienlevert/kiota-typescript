import {deserializeIntoTeleconferenceDeviceMediaQuality} from './deserializeIntoTeleconferenceDeviceMediaQuality';
import {TeleconferenceDeviceVideoQuality} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeleconferenceDeviceVideoQuality(teleconferenceDeviceVideoQuality: TeleconferenceDeviceVideoQuality | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoTeleconferenceDeviceMediaQuality(teleconferenceDeviceVideoQuality),
        "averageInboundBitRate": n => { teleconferenceDeviceVideoQuality.averageInboundBitRate = n.getNumberValue() as any ; },
        "averageInboundFrameRate": n => { teleconferenceDeviceVideoQuality.averageInboundFrameRate = n.getNumberValue() as any ; },
        "averageOutboundBitRate": n => { teleconferenceDeviceVideoQuality.averageOutboundBitRate = n.getNumberValue() as any ; },
        "averageOutboundFrameRate": n => { teleconferenceDeviceVideoQuality.averageOutboundFrameRate = n.getNumberValue() as any ; },
    }
}
