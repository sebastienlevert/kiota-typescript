import {ScopedRoleMembershipCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeScopedRoleMembership} from './serializeScopedRoleMembership';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeScopedRoleMembershipCollectionResponse(writer: SerializationWriter, scopedRoleMembershipCollectionResponse: ScopedRoleMembershipCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, scopedRoleMembershipCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", scopedRoleMembershipCollectionResponse.value as any, serializeScopedRoleMembership);
}
