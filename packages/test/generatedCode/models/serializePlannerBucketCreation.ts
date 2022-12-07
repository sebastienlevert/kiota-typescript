import {PlannerBucketCreation} from './index';
import {PlannerCreationSourceKind} from './plannerCreationSourceKind';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerBucketCreation(writer: SerializationWriter, plannerBucketCreation: PlannerBucketCreation | undefined = {}) : void {
            writer.writeEnumValue<PlannerCreationSourceKind>("creationSourceKind", plannerBucketCreation.creationSourceKind);
}
