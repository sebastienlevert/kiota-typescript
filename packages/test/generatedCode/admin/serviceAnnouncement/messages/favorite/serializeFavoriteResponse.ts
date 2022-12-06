import {FavoriteResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFavoriteResponse(writer: SerializationWriter, favoriteResponse: FavoriteResponse | undefined = {}) : void {
            writer.writeBooleanValue("value", favoriteResponse.value);
}
