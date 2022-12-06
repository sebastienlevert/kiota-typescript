import {ObjectIdentityCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeObjectIdentity} from './serializeObjectIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeObjectIdentityCollectionResponse(writer: SerializationWriter, objectIdentityCollectionResponse: ObjectIdentityCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, objectIdentityCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", objectIdentityCollectionResponse.value as any, serializeObjectIdentity);
}
