import {LocationConstraintItemCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeLocationConstraintItem} from './serializeLocationConstraintItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLocationConstraintItemCollectionResponse(writer: SerializationWriter, locationConstraintItemCollectionResponse: LocationConstraintItemCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, locationConstraintItemCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", locationConstraintItemCollectionResponse.value as any, serializeLocationConstraintItem);
}
