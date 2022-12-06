import {FavoriteResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFavoriteResponse(favoriteResponse: FavoriteResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { favoriteResponse.value = n.getBooleanValue() as any ; },
    }
}
