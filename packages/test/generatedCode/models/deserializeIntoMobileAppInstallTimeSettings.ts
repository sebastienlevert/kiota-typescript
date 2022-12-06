import {MobileAppInstallTimeSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileAppInstallTimeSettings(mobileAppInstallTimeSettings: MobileAppInstallTimeSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "deadlineDateTime": n => { mobileAppInstallTimeSettings.deadlineDateTime = n.getDateValue() as any ; },
        "@odata.type": n => { mobileAppInstallTimeSettings.odataType = n.getStringValue() as any ; },
        "startDateTime": n => { mobileAppInstallTimeSettings.startDateTime = n.getDateValue() as any ; },
        "useLocalTime": n => { mobileAppInstallTimeSettings.useLocalTime = n.getBooleanValue() as any ; },
    }
}
