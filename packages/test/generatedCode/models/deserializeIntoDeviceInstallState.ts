import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceInstallState} from './index';
import {InstallState} from './installState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceInstallState(deviceInstallState: DeviceInstallState | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceInstallState),
        "deviceId": n => { deviceInstallState.deviceId = n.getStringValue() as any ; },
        "deviceName": n => { deviceInstallState.deviceName = n.getStringValue() as any ; },
        "errorCode": n => { deviceInstallState.errorCode = n.getStringValue() as any ; },
        "installState": n => { deviceInstallState.installState = n.getEnumValue<InstallState>(InstallState) as any ; },
        "lastSyncDateTime": n => { deviceInstallState.lastSyncDateTime = n.getDateValue() as any ; },
        "osDescription": n => { deviceInstallState.osDescription = n.getStringValue() as any ; },
        "osVersion": n => { deviceInstallState.osVersion = n.getStringValue() as any ; },
        "userName": n => { deviceInstallState.userName = n.getStringValue() as any ; },
    }
}
