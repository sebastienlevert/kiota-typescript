import {DeviceCategory} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceCategory(writer: SerializationWriter, deviceCategory: DeviceCategory | undefined = {}) : void {
        serializeEntity(writer, deviceCategory)
            writer.writeStringValue("description", deviceCategory.description);
            writer.writeStringValue("displayName", deviceCategory.displayName);
            writer.writeCollectionOfPrimitiveValues<string>("roleScopeTagIds", deviceCategory.roleScopeTagIds);
}
