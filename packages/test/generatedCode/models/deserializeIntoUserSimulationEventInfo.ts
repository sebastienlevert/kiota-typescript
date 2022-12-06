import {UserSimulationEventInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserSimulationEventInfo(userSimulationEventInfo: UserSimulationEventInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "browser": n => { userSimulationEventInfo.browser = n.getStringValue() as any ; },
        "eventDateTime": n => { userSimulationEventInfo.eventDateTime = n.getDateValue() as any ; },
        "eventName": n => { userSimulationEventInfo.eventName = n.getStringValue() as any ; },
        "ipAddress": n => { userSimulationEventInfo.ipAddress = n.getStringValue() as any ; },
        "@odata.type": n => { userSimulationEventInfo.odataType = n.getStringValue() as any ; },
        "osPlatformDeviceDetails": n => { userSimulationEventInfo.osPlatformDeviceDetails = n.getStringValue() as any ; },
    }
}
