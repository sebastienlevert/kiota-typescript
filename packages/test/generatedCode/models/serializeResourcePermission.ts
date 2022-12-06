import {ResourcePermission} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeResourcePermission(writer: SerializationWriter, resourcePermission: ResourcePermission | undefined = {}) : void {
            writer.writeStringValue("@odata.type", resourcePermission.odataType);
            writer.writeStringValue("type", resourcePermission.type);
            writer.writeStringValue("value", resourcePermission.value);
}
