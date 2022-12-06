import {DelegatedPermissionClassificationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDelegatedPermissionClassification} from './serializeDelegatedPermissionClassification';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDelegatedPermissionClassificationCollectionResponse(writer: SerializationWriter, delegatedPermissionClassificationCollectionResponse: DelegatedPermissionClassificationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, delegatedPermissionClassificationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", delegatedPermissionClassificationCollectionResponse.value as any, serializeDelegatedPermissionClassification);
}
