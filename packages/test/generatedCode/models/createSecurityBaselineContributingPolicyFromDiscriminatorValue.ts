import {SecurityBaselineContributingPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSecurityBaselineContributingPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SecurityBaselineContributingPolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SecurityBaselineContributingPolicy();
}
