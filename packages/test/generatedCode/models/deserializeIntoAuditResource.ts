import {deserializeIntoAuditProperty} from './deserializeIntoAuditProperty';
import {AuditResource} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuditResource(auditResource: AuditResource | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "auditResourceType": n => { auditResource.auditResourceType = n.getStringValue() as any ; },
        "displayName": n => { auditResource.displayName = n.getStringValue() as any ; },
        "modifiedProperties": n => { auditResource.modifiedProperties = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAuditProperty) as any ; },
        "@odata.type": n => { auditResource.odataType = n.getStringValue() as any ; },
        "resourceId": n => { auditResource.resourceId = n.getStringValue() as any ; },
    }
}
