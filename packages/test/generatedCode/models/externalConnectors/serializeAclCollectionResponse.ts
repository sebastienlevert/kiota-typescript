import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {AclCollectionResponse} from './index';
import {serializeAcl} from './serializeAcl';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAclCollectionResponse(writer: SerializationWriter, aclCollectionResponse: AclCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, aclCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", aclCollectionResponse.value as any, serializeAcl);
}
