import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoResourceReference} from './deserializeIntoResourceReference';
import {deserializeIntoResourceVisualization} from './deserializeIntoResourceVisualization';
import {deserializeIntoSharingDetail} from './deserializeIntoSharingDetail';
import {SharedInsight} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSharedInsight(sharedInsight: SharedInsight | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(sharedInsight),
        "lastShared": n => { sharedInsight.lastShared = n.getObject(deserializeIntoSharingDetail) as any ; },
        "lastSharedMethod": n => { sharedInsight.lastSharedMethod = n.getObject(deserializeIntoEntity) as any ; },
        "resource": n => { sharedInsight.resource = n.getObject(deserializeIntoEntity) as any ; },
        "resourceReference": n => { sharedInsight.resourceReference = n.getObject(deserializeIntoResourceReference) as any ; },
        "resourceVisualization": n => { sharedInsight.resourceVisualization = n.getObject(deserializeIntoResourceVisualization) as any ; },
        "sharingHistory": n => { sharedInsight.sharingHistory = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSharingDetail) as any ; },
    }
}
