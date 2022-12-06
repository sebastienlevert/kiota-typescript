import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {AppRoleAssignment} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppRoleAssignment(appRoleAssignment: AppRoleAssignment | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDirectoryObject(appRoleAssignment),
        "appRoleId": n => { appRoleAssignment.appRoleId = n.getStringValue() as any ; },
        "createdDateTime": n => { appRoleAssignment.createdDateTime = n.getDateValue() as any ; },
        "principalDisplayName": n => { appRoleAssignment.principalDisplayName = n.getStringValue() as any ; },
        "principalId": n => { appRoleAssignment.principalId = n.getStringValue() as any ; },
        "principalType": n => { appRoleAssignment.principalType = n.getStringValue() as any ; },
        "resourceDisplayName": n => { appRoleAssignment.resourceDisplayName = n.getStringValue() as any ; },
        "resourceId": n => { appRoleAssignment.resourceId = n.getStringValue() as any ; },
    }
}
