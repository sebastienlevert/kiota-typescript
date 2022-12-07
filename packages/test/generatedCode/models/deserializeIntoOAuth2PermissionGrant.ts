import {deserializeIntoEntity} from './deserializeIntoEntity';
import {OAuth2PermissionGrant} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOAuth2PermissionGrant(oAuth2PermissionGrant: OAuth2PermissionGrant | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(oAuth2PermissionGrant),
        "clientId": n => { oAuth2PermissionGrant.clientId = n.getStringValue() as any ; },
        "consentType": n => { oAuth2PermissionGrant.consentType = n.getStringValue() as any ; },
        "expiryTime": n => { oAuth2PermissionGrant.expiryTime = n.getDateValue() as any ; },
        "principalId": n => { oAuth2PermissionGrant.principalId = n.getStringValue() as any ; },
        "resourceId": n => { oAuth2PermissionGrant.resourceId = n.getStringValue() as any ; },
        "scope": n => { oAuth2PermissionGrant.scope = n.getStringValue() as any ; },
        "startTime": n => { oAuth2PermissionGrant.startTime = n.getDateValue() as any ; },
    }
}
