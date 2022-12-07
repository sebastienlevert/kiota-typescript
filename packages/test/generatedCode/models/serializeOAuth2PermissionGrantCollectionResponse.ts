import {OAuth2PermissionGrantCollectionResponse} from './index';
import {serializeOAuth2PermissionGrant} from './serializeOAuth2PermissionGrant';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOAuth2PermissionGrantCollectionResponse(writer: SerializationWriter, oAuth2PermissionGrantCollectionResponse: OAuth2PermissionGrantCollectionResponse | undefined = {}) : void {
            writer.writeStringValue("@odata.nextLink", oAuth2PermissionGrantCollectionResponse.odataNextLink);
            writer.writeCollectionOfObjectValuesFromMethod("value", oAuth2PermissionGrantCollectionResponse.value as any, serializeOAuth2PermissionGrant);
}
