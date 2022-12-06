import {DeviceInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceInfo(deviceInfo: DeviceInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "captureDeviceDriver": n => { deviceInfo.captureDeviceDriver = n.getStringValue() as any ; },
        "captureDeviceName": n => { deviceInfo.captureDeviceName = n.getStringValue() as any ; },
        "captureNotFunctioningEventRatio": n => { deviceInfo.captureNotFunctioningEventRatio = n.getNumberValue() as any ; },
        "cpuInsufficentEventRatio": n => { deviceInfo.cpuInsufficentEventRatio = n.getNumberValue() as any ; },
        "deviceClippingEventRatio": n => { deviceInfo.deviceClippingEventRatio = n.getNumberValue() as any ; },
        "deviceGlitchEventRatio": n => { deviceInfo.deviceGlitchEventRatio = n.getNumberValue() as any ; },
        "howlingEventCount": n => { deviceInfo.howlingEventCount = n.getNumberValue() as any ; },
        "initialSignalLevelRootMeanSquare": n => { deviceInfo.initialSignalLevelRootMeanSquare = n.getNumberValue() as any ; },
        "lowSpeechLevelEventRatio": n => { deviceInfo.lowSpeechLevelEventRatio = n.getNumberValue() as any ; },
        "lowSpeechToNoiseEventRatio": n => { deviceInfo.lowSpeechToNoiseEventRatio = n.getNumberValue() as any ; },
        "micGlitchRate": n => { deviceInfo.micGlitchRate = n.getNumberValue() as any ; },
        "@odata.type": n => { deviceInfo.odataType = n.getStringValue() as any ; },
        "receivedNoiseLevel": n => { deviceInfo.receivedNoiseLevel = n.getNumberValue() as any ; },
        "receivedSignalLevel": n => { deviceInfo.receivedSignalLevel = n.getNumberValue() as any ; },
        "renderDeviceDriver": n => { deviceInfo.renderDeviceDriver = n.getStringValue() as any ; },
        "renderDeviceName": n => { deviceInfo.renderDeviceName = n.getStringValue() as any ; },
        "renderMuteEventRatio": n => { deviceInfo.renderMuteEventRatio = n.getNumberValue() as any ; },
        "renderNotFunctioningEventRatio": n => { deviceInfo.renderNotFunctioningEventRatio = n.getNumberValue() as any ; },
        "renderZeroVolumeEventRatio": n => { deviceInfo.renderZeroVolumeEventRatio = n.getNumberValue() as any ; },
        "sentNoiseLevel": n => { deviceInfo.sentNoiseLevel = n.getNumberValue() as any ; },
        "sentSignalLevel": n => { deviceInfo.sentSignalLevel = n.getNumberValue() as any ; },
        "speakerGlitchRate": n => { deviceInfo.speakerGlitchRate = n.getNumberValue() as any ; },
    }
}
