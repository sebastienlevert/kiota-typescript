import {deserializeIntoStsPolicy} from './deserializeIntoStsPolicy';
import {ActivityBasedTimeoutPolicy} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoActivityBasedTimeoutPolicy(activityBasedTimeoutPolicy: ActivityBasedTimeoutPolicy | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoStsPolicy(activityBasedTimeoutPolicy),
    }
}
