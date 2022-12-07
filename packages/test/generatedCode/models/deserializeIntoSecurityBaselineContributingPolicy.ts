import {SecurityBaselineContributingPolicy} from './index';
import {SecurityBaselinePolicySourceType} from './securityBaselinePolicySourceType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSecurityBaselineContributingPolicy(securityBaselineContributingPolicy: SecurityBaselineContributingPolicy | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { securityBaselineContributingPolicy.displayName = n.getStringValue() as any ; },
        "sourceId": n => { securityBaselineContributingPolicy.sourceId = n.getStringValue() as any ; },
        "sourceType": n => { securityBaselineContributingPolicy.sourceType = n.getEnumValue<SecurityBaselinePolicySourceType>(SecurityBaselinePolicySourceType) as any ; },
    }
}
