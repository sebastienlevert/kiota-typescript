import {AuditActor} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuditActor(auditActor: AuditActor | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "applicationDisplayName": n => { auditActor.applicationDisplayName = n.getStringValue() as any ; },
        "applicationId": n => { auditActor.applicationId = n.getStringValue() as any ; },
        "auditActorType": n => { auditActor.auditActorType = n.getStringValue() as any ; },
        "ipAddress": n => { auditActor.ipAddress = n.getStringValue() as any ; },
        "@odata.type": n => { auditActor.odataType = n.getStringValue() as any ; },
        "servicePrincipalName": n => { auditActor.servicePrincipalName = n.getStringValue() as any ; },
        "userId": n => { auditActor.userId = n.getStringValue() as any ; },
        "userPermissions": n => { auditActor.userPermissions = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "userPrincipalName": n => { auditActor.userPrincipalName = n.getStringValue() as any ; },
    }
}
