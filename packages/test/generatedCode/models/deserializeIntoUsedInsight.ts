import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoResourceReference} from './deserializeIntoResourceReference';
import {deserializeIntoResourceVisualization} from './deserializeIntoResourceVisualization';
import {deserializeIntoUsageDetails} from './deserializeIntoUsageDetails';
import {UsedInsight} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUsedInsight(usedInsight: UsedInsight | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(usedInsight),
        "lastUsed": n => { usedInsight.lastUsed = n.getObject(deserializeIntoUsageDetails) as any ; },
        "resource": n => { usedInsight.resource = n.getObject(deserializeIntoEntity) as any ; },
        "resourceReference": n => { usedInsight.resourceReference = n.getObject(deserializeIntoResourceReference) as any ; },
        "resourceVisualization": n => { usedInsight.resourceVisualization = n.getObject(deserializeIntoResourceVisualization) as any ; },
    }
}
