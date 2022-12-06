import {MobileAppInstallTimeSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMobileAppInstallTimeSettings(writer: SerializationWriter, mobileAppInstallTimeSettings: MobileAppInstallTimeSettings | undefined = {}) : void {
            writer.writeDateValue("deadlineDateTime", mobileAppInstallTimeSettings.deadlineDateTime);
            writer.writeStringValue("@odata.type", mobileAppInstallTimeSettings.odataType);
            writer.writeDateValue("startDateTime", mobileAppInstallTimeSettings.startDateTime);
            writer.writeBooleanValue("useLocalTime", mobileAppInstallTimeSettings.useLocalTime);
}
