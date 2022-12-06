import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoRelation} from './deserializeIntoRelation';
import {RelationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRelationCollectionResponse(relationCollectionResponse: RelationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(relationCollectionResponse),
        "value": n => { relationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRelation) as any ; },
    }
}
