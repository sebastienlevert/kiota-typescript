import {FavoritePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFavoritePostRequestBody(writer: SerializationWriter, favoritePostRequestBody: FavoritePostRequestBody | undefined = {}) : void {
            writer.writeCollectionOfPrimitiveValues<string>("messageIds", favoritePostRequestBody.messageIds);
}
