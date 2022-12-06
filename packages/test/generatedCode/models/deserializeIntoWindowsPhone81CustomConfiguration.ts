import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {deserializeIntoOmaSetting} from './deserializeIntoOmaSetting';
import {WindowsPhone81CustomConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsPhone81CustomConfiguration(windowsPhone81CustomConfiguration: WindowsPhone81CustomConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(windowsPhone81CustomConfiguration),
        "omaSettings": n => { windowsPhone81CustomConfiguration.omaSettings = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOmaSetting) as any ; },
    }
}
