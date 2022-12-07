import {TargetPolicyEndpoints} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTargetPolicyEndpoints(targetPolicyEndpoints: TargetPolicyEndpoints | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "platformTypes": n => { targetPolicyEndpoints.platformTypes = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
