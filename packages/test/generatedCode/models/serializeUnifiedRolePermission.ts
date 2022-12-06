import {UnifiedRolePermission} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRolePermission(writer: SerializationWriter, unifiedRolePermission: UnifiedRolePermission | undefined = {}) : void {
            writer.writeCollectionOfPrimitiveValues<string>("allowedResourceActions", unifiedRolePermission.allowedResourceActions);
            writer.writeStringValue("condition", unifiedRolePermission.condition);
            writer.writeCollectionOfPrimitiveValues<string>("excludedResourceActions", unifiedRolePermission.excludedResourceActions);
            writer.writeStringValue("@odata.type", unifiedRolePermission.odataType);
}
