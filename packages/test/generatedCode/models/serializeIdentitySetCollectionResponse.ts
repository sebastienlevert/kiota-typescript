import {IdentitySetCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentitySetCollectionResponse(writer: SerializationWriter, identitySetCollectionResponse: IdentitySetCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, identitySetCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", identitySetCollectionResponse.value as any, serializeIdentitySet);
}
