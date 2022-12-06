import {deserializeIntoDeviceInstallState} from './deserializeIntoDeviceInstallState';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {UserInstallStateSummary} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserInstallStateSummary(userInstallStateSummary: UserInstallStateSummary | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userInstallStateSummary),
        "deviceStates": n => { userInstallStateSummary.deviceStates = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceInstallState) as any ; },
        "failedDeviceCount": n => { userInstallStateSummary.failedDeviceCount = n.getNumberValue() as any ; },
        "installedDeviceCount": n => { userInstallStateSummary.installedDeviceCount = n.getNumberValue() as any ; },
        "notInstalledDeviceCount": n => { userInstallStateSummary.notInstalledDeviceCount = n.getNumberValue() as any ; },
        "userName": n => { userInstallStateSummary.userName = n.getStringValue() as any ; },
    }
}
