import {UserInstallStateSummary} from './index';
import {serializeDeviceInstallState} from './serializeDeviceInstallState';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserInstallStateSummary(writer: SerializationWriter, userInstallStateSummary: UserInstallStateSummary | undefined = {}) : void {
        serializeEntity(writer, userInstallStateSummary)
            writer.writeCollectionOfObjectValuesFromMethod("deviceStates", userInstallStateSummary.deviceStates as any, serializeDeviceInstallState);
            writer.writeNumberValue("failedDeviceCount", userInstallStateSummary.failedDeviceCount);
            writer.writeNumberValue("installedDeviceCount", userInstallStateSummary.installedDeviceCount);
            writer.writeNumberValue("notInstalledDeviceCount", userInstallStateSummary.notInstalledDeviceCount);
            writer.writeStringValue("userName", userInstallStateSummary.userName);
}
