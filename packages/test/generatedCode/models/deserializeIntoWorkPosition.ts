import {deserializeIntoItemFacet} from './deserializeIntoItemFacet';
import {deserializeIntoPositionDetail} from './deserializeIntoPositionDetail';
import {deserializeIntoRelatedPerson} from './deserializeIntoRelatedPerson';
import {WorkPosition} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkPosition(workPosition: WorkPosition | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoItemFacet(workPosition),
        "categories": n => { workPosition.categories = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "colleagues": n => { workPosition.colleagues = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRelatedPerson) as any ; },
        "detail": n => { workPosition.detail = n.getObject(deserializeIntoPositionDetail) as any ; },
        "isCurrent": n => { workPosition.isCurrent = n.getBooleanValue() as any ; },
        "manager": n => { workPosition.manager = n.getObject(deserializeIntoRelatedPerson) as any ; },
    }
}
