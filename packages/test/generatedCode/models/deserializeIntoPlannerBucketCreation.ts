import {PlannerBucketCreation} from './index';
import {PlannerCreationSourceKind} from './plannerCreationSourceKind';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerBucketCreation(plannerBucketCreation: PlannerBucketCreation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "creationSourceKind": n => { plannerBucketCreation.creationSourceKind = n.getEnumValue<PlannerCreationSourceKind>(PlannerCreationSourceKind) as any ; },
    }
}
