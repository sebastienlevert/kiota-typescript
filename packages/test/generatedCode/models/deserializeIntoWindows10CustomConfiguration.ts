import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {deserializeIntoOmaSetting} from './deserializeIntoOmaSetting';
import {Windows10CustomConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindows10CustomConfiguration(windows10CustomConfiguration: Windows10CustomConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(windows10CustomConfiguration),
        "omaSettings": n => { windows10CustomConfiguration.omaSettings = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOmaSetting) as any ; },
    }
}
