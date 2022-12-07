import {SecurityBaselineSettingState} from './index';
import {SecurityBaselineComplianceState} from './securityBaselineComplianceState';
import {serializeEntity} from './serializeEntity';
import {serializeSecurityBaselineContributingPolicy} from './serializeSecurityBaselineContributingPolicy';
import {serializeSettingSource} from './serializeSettingSource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSecurityBaselineSettingState(writer: SerializationWriter, securityBaselineSettingState: SecurityBaselineSettingState | undefined = {}) : void {
        serializeEntity(writer, securityBaselineSettingState)
            writer.writeCollectionOfObjectValuesFromMethod("contributingPolicies", securityBaselineSettingState.contributingPolicies as any, serializeSecurityBaselineContributingPolicy);
            writer.writeStringValue("errorCode", securityBaselineSettingState.errorCode);
            writer.writeStringValue("settingCategoryId", securityBaselineSettingState.settingCategoryId);
            writer.writeStringValue("settingCategoryName", securityBaselineSettingState.settingCategoryName);
            writer.writeStringValue("settingId", securityBaselineSettingState.settingId);
            writer.writeStringValue("settingName", securityBaselineSettingState.settingName);
            writer.writeCollectionOfObjectValuesFromMethod("sourcePolicies", securityBaselineSettingState.sourcePolicies as any, serializeSettingSource);
            writer.writeEnumValue<SecurityBaselineComplianceState>("state", securityBaselineSettingState.state);
}
