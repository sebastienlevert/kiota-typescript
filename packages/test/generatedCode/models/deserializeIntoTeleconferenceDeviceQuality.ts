import {deserializeIntoTeleconferenceDeviceMediaQuality} from './deserializeIntoTeleconferenceDeviceMediaQuality';
import {TeleconferenceDeviceQuality} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeleconferenceDeviceQuality(teleconferenceDeviceQuality: TeleconferenceDeviceQuality | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "callChainId": n => { teleconferenceDeviceQuality.callChainId = n.getStringValue() as any ; },
        "cloudServiceDeploymentEnvironment": n => { teleconferenceDeviceQuality.cloudServiceDeploymentEnvironment = n.getStringValue() as any ; },
        "cloudServiceDeploymentId": n => { teleconferenceDeviceQuality.cloudServiceDeploymentId = n.getStringValue() as any ; },
        "cloudServiceInstanceName": n => { teleconferenceDeviceQuality.cloudServiceInstanceName = n.getStringValue() as any ; },
        "cloudServiceName": n => { teleconferenceDeviceQuality.cloudServiceName = n.getStringValue() as any ; },
        "deviceDescription": n => { teleconferenceDeviceQuality.deviceDescription = n.getStringValue() as any ; },
        "deviceName": n => { teleconferenceDeviceQuality.deviceName = n.getStringValue() as any ; },
        "mediaLegId": n => { teleconferenceDeviceQuality.mediaLegId = n.getStringValue() as any ; },
        "mediaQualityList": n => { teleconferenceDeviceQuality.mediaQualityList = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTeleconferenceDeviceMediaQuality) as any ; },
        "@odata.type": n => { teleconferenceDeviceQuality.odataType = n.getStringValue() as any ; },
        "participantId": n => { teleconferenceDeviceQuality.participantId = n.getStringValue() as any ; },
    }
}
