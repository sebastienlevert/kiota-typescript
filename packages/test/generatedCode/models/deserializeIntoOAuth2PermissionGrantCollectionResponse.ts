import {deserializeIntoOAuth2PermissionGrant} from './deserializeIntoOAuth2PermissionGrant';
import {OAuth2PermissionGrantCollectionResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOAuth2PermissionGrantCollectionResponse(oAuth2PermissionGrantCollectionResponse: OAuth2PermissionGrantCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.nextLink": n => { oAuth2PermissionGrantCollectionResponse.odataNextLink = n.getStringValue() as any ; },
        "value": n => { oAuth2PermissionGrantCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOAuth2PermissionGrant) as any ; },
    }
}
