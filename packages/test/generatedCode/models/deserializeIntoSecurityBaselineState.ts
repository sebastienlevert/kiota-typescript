import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoSecurityBaselineSettingState} from './deserializeIntoSecurityBaselineSettingState';
import {SecurityBaselineState} from './index';
import {SecurityBaselineComplianceState} from './securityBaselineComplianceState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSecurityBaselineState(securityBaselineState: SecurityBaselineState | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(securityBaselineState),
        "displayName": n => { securityBaselineState.displayName = n.getStringValue() as any ; },
        "securityBaselineTemplateId": n => { securityBaselineState.securityBaselineTemplateId = n.getStringValue() as any ; },
        "settingStates": n => { securityBaselineState.settingStates = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSecurityBaselineSettingState) as any ; },
        "state": n => { securityBaselineState.state = n.getEnumValue<SecurityBaselineComplianceState>(SecurityBaselineComplianceState) as any ; },
        "userPrincipalName": n => { securityBaselineState.userPrincipalName = n.getStringValue() as any ; },
    }
}
