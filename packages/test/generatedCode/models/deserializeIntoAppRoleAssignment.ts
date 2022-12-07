import {deserializeIntoEntity} from './deserializeIntoEntity';
import {AppRoleAssignment} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppRoleAssignment(appRoleAssignment: AppRoleAssignment | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(appRoleAssignment),
        "appRoleId": n => { appRoleAssignment.appRoleId = n.getStringValue() as any ; },
        "creationTimestamp": n => { appRoleAssignment.creationTimestamp = n.getDateValue() as any ; },
        "principalDisplayName": n => { appRoleAssignment.principalDisplayName = n.getStringValue() as any ; },
        "principalId": n => { appRoleAssignment.principalId = n.getStringValue() as any ; },
        "principalType": n => { appRoleAssignment.principalType = n.getStringValue() as any ; },
        "resourceDisplayName": n => { appRoleAssignment.resourceDisplayName = n.getStringValue() as any ; },
        "resourceId": n => { appRoleAssignment.resourceId = n.getStringValue() as any ; },
    }
}
