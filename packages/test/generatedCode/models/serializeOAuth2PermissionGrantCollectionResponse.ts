import {OAuth2PermissionGrantCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeOAuth2PermissionGrant} from './serializeOAuth2PermissionGrant';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOAuth2PermissionGrantCollectionResponse(writer: SerializationWriter, oAuth2PermissionGrantCollectionResponse: OAuth2PermissionGrantCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, oAuth2PermissionGrantCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", oAuth2PermissionGrantCollectionResponse.value as any, serializeOAuth2PermissionGrant);
}
