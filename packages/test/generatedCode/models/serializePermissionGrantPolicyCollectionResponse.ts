import {PermissionGrantPolicyCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePermissionGrantPolicy} from './serializePermissionGrantPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePermissionGrantPolicyCollectionResponse(writer: SerializationWriter, permissionGrantPolicyCollectionResponse: PermissionGrantPolicyCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, permissionGrantPolicyCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", permissionGrantPolicyCollectionResponse.value as any, serializePermissionGrantPolicy);
}
