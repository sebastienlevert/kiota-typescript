import {PlannerBucketCreation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerBucketCreationFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerBucketCreation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerBucketCreation();
}
