import {UserTrainingContentEventInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserTrainingContentEventInfo(userTrainingContentEventInfo: UserTrainingContentEventInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "browser": n => { userTrainingContentEventInfo.browser = n.getStringValue() as any ; },
        "contentDateTime": n => { userTrainingContentEventInfo.contentDateTime = n.getDateValue() as any ; },
        "ipAddress": n => { userTrainingContentEventInfo.ipAddress = n.getStringValue() as any ; },
        "@odata.type": n => { userTrainingContentEventInfo.odataType = n.getStringValue() as any ; },
        "osPlatformDeviceDetails": n => { userTrainingContentEventInfo.osPlatformDeviceDetails = n.getStringValue() as any ; },
        "potentialScoreImpact": n => { userTrainingContentEventInfo.potentialScoreImpact = n.getNumberValue() as any ; },
    }
}
