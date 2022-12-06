import {WindowsUpdateInstallScheduleType} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsUpdateInstallScheduleType(windowsUpdateInstallScheduleType: WindowsUpdateInstallScheduleType | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { windowsUpdateInstallScheduleType.odataType = n.getStringValue() as any ; },
    }
}
