import {TargetPolicyEndpoints} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTargetPolicyEndpointsFromDiscriminatorValue(parseNode: ParseNode | undefined) : TargetPolicyEndpoints {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TargetPolicyEndpoints();
}
