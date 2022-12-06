import {deserializeIntoPermissionScope} from './deserializeIntoPermissionScope';
import {deserializeIntoPreAuthorizedApplication} from './deserializeIntoPreAuthorizedApplication';
import {ApiApplication} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApiApplication(apiApplication: ApiApplication | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "acceptMappedClaims": n => { apiApplication.acceptMappedClaims = n.getBooleanValue() as any ; },
        "knownClientApplications": n => { apiApplication.knownClientApplications = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "oauth2PermissionScopes": n => { apiApplication.oauth2PermissionScopes = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPermissionScope) as any ; },
        "@odata.type": n => { apiApplication.odataType = n.getStringValue() as any ; },
        "preAuthorizedApplications": n => { apiApplication.preAuthorizedApplications = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPreAuthorizedApplication) as any ; },
        "requestedAccessTokenVersion": n => { apiApplication.requestedAccessTokenVersion = n.getNumberValue() as any ; },
    }
}
