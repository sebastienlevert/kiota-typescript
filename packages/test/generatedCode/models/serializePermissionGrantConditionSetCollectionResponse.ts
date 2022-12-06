import {PermissionGrantConditionSetCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePermissionGrantConditionSet} from './serializePermissionGrantConditionSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePermissionGrantConditionSetCollectionResponse(writer: SerializationWriter, permissionGrantConditionSetCollectionResponse: PermissionGrantConditionSetCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, permissionGrantConditionSetCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", permissionGrantConditionSetCollectionResponse.value as any, serializePermissionGrantConditionSet);
}
