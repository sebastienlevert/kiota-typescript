import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoOAuth2PermissionGrant} from './deserializeIntoOAuth2PermissionGrant';
import {OAuth2PermissionGrantCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOAuth2PermissionGrantCollectionResponse(oAuth2PermissionGrantCollectionResponse: OAuth2PermissionGrantCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(oAuth2PermissionGrantCollectionResponse),
        "value": n => { oAuth2PermissionGrantCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOAuth2PermissionGrant) as any ; },
    }
}
