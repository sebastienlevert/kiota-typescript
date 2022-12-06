import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {deserializeIntoOmaSetting} from './deserializeIntoOmaSetting';
import {AndroidWorkProfileCustomConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAndroidWorkProfileCustomConfiguration(androidWorkProfileCustomConfiguration: AndroidWorkProfileCustomConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(androidWorkProfileCustomConfiguration),
        "omaSettings": n => { androidWorkProfileCustomConfiguration.omaSettings = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOmaSetting) as any ; },
    }
}
