import {WindowsInformationProtectionNetworkLearningSummary} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsInformationProtectionNetworkLearningSummary(writer: SerializationWriter, windowsInformationProtectionNetworkLearningSummary: WindowsInformationProtectionNetworkLearningSummary | undefined = {}) : void {
        serializeEntity(writer, windowsInformationProtectionNetworkLearningSummary)
            writer.writeNumberValue("deviceCount", windowsInformationProtectionNetworkLearningSummary.deviceCount);
            writer.writeStringValue("url", windowsInformationProtectionNetworkLearningSummary.url);
}
