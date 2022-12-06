import {deserializeIntoSubjectSet} from './deserializeIntoSubjectSet';
import {TargetApplicationOwners} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTargetApplicationOwners(targetApplicationOwners: TargetApplicationOwners | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSubjectSet(targetApplicationOwners),
    }
}
