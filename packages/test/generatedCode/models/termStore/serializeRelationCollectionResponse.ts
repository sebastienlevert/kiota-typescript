import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {RelationCollectionResponse} from './index';
import {serializeRelation} from './serializeRelation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRelationCollectionResponse(writer: SerializationWriter, relationCollectionResponse: RelationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, relationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", relationCollectionResponse.value as any, serializeRelation);
}
