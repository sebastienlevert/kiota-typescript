import {SharePointIdentitySetCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSharePointIdentitySet} from './serializeSharePointIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSharePointIdentitySetCollectionResponse(writer: SerializationWriter, sharePointIdentitySetCollectionResponse: SharePointIdentitySetCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, sharePointIdentitySetCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", sharePointIdentitySetCollectionResponse.value as any, serializeSharePointIdentitySet);
}
