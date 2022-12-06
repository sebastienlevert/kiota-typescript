import {ApplicationType} from './applicationType';
import {WindowsInformationProtectionAppLearningSummary} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsInformationProtectionAppLearningSummary(writer: SerializationWriter, windowsInformationProtectionAppLearningSummary: WindowsInformationProtectionAppLearningSummary | undefined = {}) : void {
        serializeEntity(writer, windowsInformationProtectionAppLearningSummary)
            writer.writeStringValue("applicationName", windowsInformationProtectionAppLearningSummary.applicationName);
            writer.writeEnumValue<ApplicationType>("applicationType", windowsInformationProtectionAppLearningSummary.applicationType);
            writer.writeNumberValue("deviceCount", windowsInformationProtectionAppLearningSummary.deviceCount);
}
