import {SecurityBaselineContributingPolicy} from './index';
import {SecurityBaselinePolicySourceType} from './securityBaselinePolicySourceType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSecurityBaselineContributingPolicy(writer: SerializationWriter, securityBaselineContributingPolicy: SecurityBaselineContributingPolicy | undefined = {}) : void {
            writer.writeStringValue("displayName", securityBaselineContributingPolicy.displayName);
            writer.writeStringValue("sourceId", securityBaselineContributingPolicy.sourceId);
            writer.writeEnumValue<SecurityBaselinePolicySourceType>("sourceType", securityBaselineContributingPolicy.sourceType);
}
