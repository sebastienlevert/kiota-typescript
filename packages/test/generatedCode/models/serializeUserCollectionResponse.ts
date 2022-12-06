import {UserCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUser} from './serializeUser';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserCollectionResponse(writer: SerializationWriter, userCollectionResponse: UserCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", userCollectionResponse.value as any, serializeUser);
}
