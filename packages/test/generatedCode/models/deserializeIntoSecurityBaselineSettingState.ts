import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoSecurityBaselineContributingPolicy} from './deserializeIntoSecurityBaselineContributingPolicy';
import {deserializeIntoSettingSource} from './deserializeIntoSettingSource';
import {SecurityBaselineSettingState} from './index';
import {SecurityBaselineComplianceState} from './securityBaselineComplianceState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSecurityBaselineSettingState(securityBaselineSettingState: SecurityBaselineSettingState | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(securityBaselineSettingState),
        "contributingPolicies": n => { securityBaselineSettingState.contributingPolicies = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSecurityBaselineContributingPolicy) as any ; },
        "errorCode": n => { securityBaselineSettingState.errorCode = n.getStringValue() as any ; },
        "settingCategoryId": n => { securityBaselineSettingState.settingCategoryId = n.getStringValue() as any ; },
        "settingCategoryName": n => { securityBaselineSettingState.settingCategoryName = n.getStringValue() as any ; },
        "settingId": n => { securityBaselineSettingState.settingId = n.getStringValue() as any ; },
        "settingName": n => { securityBaselineSettingState.settingName = n.getStringValue() as any ; },
        "sourcePolicies": n => { securityBaselineSettingState.sourcePolicies = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSettingSource) as any ; },
        "state": n => { securityBaselineSettingState.state = n.getEnumValue<SecurityBaselineComplianceState>(SecurityBaselineComplianceState) as any ; },
    }
}
