import {deserializeIntoEntity} from './deserializeIntoEntity';
import {WindowsInformationProtectionAppLockerFile} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionAppLockerFile(windowsInformationProtectionAppLockerFile: WindowsInformationProtectionAppLockerFile | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(windowsInformationProtectionAppLockerFile),
        "displayName": n => { windowsInformationProtectionAppLockerFile.displayName = n.getStringValue() as any ; },
        "file": n => { windowsInformationProtectionAppLockerFile.file = n.getStringValue() as any ; },
        "fileHash": n => { windowsInformationProtectionAppLockerFile.fileHash = n.getStringValue() as any ; },
        "version": n => { windowsInformationProtectionAppLockerFile.version = n.getStringValue() as any ; },
    }
}
