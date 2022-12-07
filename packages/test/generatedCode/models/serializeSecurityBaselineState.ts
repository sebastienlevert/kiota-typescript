import {SecurityBaselineState} from './index';
import {SecurityBaselineComplianceState} from './securityBaselineComplianceState';
import {serializeEntity} from './serializeEntity';
import {serializeSecurityBaselineSettingState} from './serializeSecurityBaselineSettingState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSecurityBaselineState(writer: SerializationWriter, securityBaselineState: SecurityBaselineState | undefined = {}) : void {
        serializeEntity(writer, securityBaselineState)
            writer.writeStringValue("displayName", securityBaselineState.displayName);
            writer.writeStringValue("securityBaselineTemplateId", securityBaselineState.securityBaselineTemplateId);
            writer.writeCollectionOfObjectValuesFromMethod("settingStates", securityBaselineState.settingStates as any, serializeSecurityBaselineSettingState);
            writer.writeEnumValue<SecurityBaselineComplianceState>("state", securityBaselineState.state);
            writer.writeStringValue("userPrincipalName", securityBaselineState.userPrincipalName);
}
