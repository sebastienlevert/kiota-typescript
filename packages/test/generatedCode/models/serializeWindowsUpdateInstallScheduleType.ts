import {WindowsUpdateInstallScheduleType} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsUpdateInstallScheduleType(writer: SerializationWriter, windowsUpdateInstallScheduleType: WindowsUpdateInstallScheduleType | undefined = {}) : void {
            writer.writeStringValue("@odata.type", windowsUpdateInstallScheduleType.odataType);
}
