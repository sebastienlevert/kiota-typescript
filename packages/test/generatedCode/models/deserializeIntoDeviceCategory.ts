import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceCategory} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceCategory(deviceCategory: DeviceCategory | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceCategory),
        "description": n => { deviceCategory.description = n.getStringValue() as any ; },
        "displayName": n => { deviceCategory.displayName = n.getStringValue() as any ; },
        "roleScopeTagIds": n => { deviceCategory.roleScopeTagIds = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
