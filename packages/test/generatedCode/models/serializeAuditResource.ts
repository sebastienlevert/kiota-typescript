import {AuditResource} from './index';
import {serializeAuditProperty} from './serializeAuditProperty';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuditResource(writer: SerializationWriter, auditResource: AuditResource | undefined = {}) : void {
            writer.writeStringValue("auditResourceType", auditResource.auditResourceType);
            writer.writeStringValue("displayName", auditResource.displayName);
            writer.writeCollectionOfObjectValuesFromMethod("modifiedProperties", auditResource.modifiedProperties as any, serializeAuditProperty);
            writer.writeStringValue("@odata.type", auditResource.odataType);
            writer.writeStringValue("resourceId", auditResource.resourceId);
}
