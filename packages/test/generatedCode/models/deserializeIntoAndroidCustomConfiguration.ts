import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {deserializeIntoOmaSetting} from './deserializeIntoOmaSetting';
import {AndroidCustomConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAndroidCustomConfiguration(androidCustomConfiguration: AndroidCustomConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(androidCustomConfiguration),
        "omaSettings": n => { androidCustomConfiguration.omaSettings = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOmaSetting) as any ; },
    }
}
