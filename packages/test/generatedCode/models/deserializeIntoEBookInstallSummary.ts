import {deserializeIntoEntity} from './deserializeIntoEntity';
import {EBookInstallSummary} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEBookInstallSummary(eBookInstallSummary: EBookInstallSummary | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(eBookInstallSummary),
        "failedDeviceCount": n => { eBookInstallSummary.failedDeviceCount = n.getNumberValue() as any ; },
        "failedUserCount": n => { eBookInstallSummary.failedUserCount = n.getNumberValue() as any ; },
        "installedDeviceCount": n => { eBookInstallSummary.installedDeviceCount = n.getNumberValue() as any ; },
        "installedUserCount": n => { eBookInstallSummary.installedUserCount = n.getNumberValue() as any ; },
        "notInstalledDeviceCount": n => { eBookInstallSummary.notInstalledDeviceCount = n.getNumberValue() as any ; },
        "notInstalledUserCount": n => { eBookInstallSummary.notInstalledUserCount = n.getNumberValue() as any ; },
    }
}
