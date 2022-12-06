import {FavoritePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFavoritePostRequestBody(favoritePostRequestBody: FavoritePostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "messageIds": n => { favoritePostRequestBody.messageIds = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
