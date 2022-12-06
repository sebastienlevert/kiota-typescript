import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {IdentityCollectionResponse} from './index';
import {serializeIdentity} from './serializeIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityCollectionResponse(writer: SerializationWriter, identityCollectionResponse: IdentityCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, identityCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", identityCollectionResponse.value as any, serializeIdentity);
}
