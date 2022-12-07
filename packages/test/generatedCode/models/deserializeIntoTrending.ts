import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoResourceReference} from './deserializeIntoResourceReference';
import {deserializeIntoResourceVisualization} from './deserializeIntoResourceVisualization';
import {Trending} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTrending(trending: Trending | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(trending),
        "lastModifiedDateTime": n => { trending.lastModifiedDateTime = n.getDateValue() as any ; },
        "resource": n => { trending.resource = n.getObject(deserializeIntoEntity) as any ; },
        "resourceReference": n => { trending.resourceReference = n.getObject(deserializeIntoResourceReference) as any ; },
        "resourceVisualization": n => { trending.resourceVisualization = n.getObject(deserializeIntoResourceVisualization) as any ; },
        "weight": n => { trending.weight = n.getNumberValue() as any ; },
    }
}
