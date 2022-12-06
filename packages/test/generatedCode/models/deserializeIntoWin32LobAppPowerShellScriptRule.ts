import {deserializeIntoWin32LobAppRule} from './deserializeIntoWin32LobAppRule';
import {Win32LobAppPowerShellScriptRule} from './index';
import {RunAsAccountType} from './runAsAccountType';
import {Win32LobAppPowerShellScriptRuleOperationType} from './win32LobAppPowerShellScriptRuleOperationType';
import {Win32LobAppRuleOperator} from './win32LobAppRuleOperator';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWin32LobAppPowerShellScriptRule(win32LobAppPowerShellScriptRule: Win32LobAppPowerShellScriptRule | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoWin32LobAppRule(win32LobAppPowerShellScriptRule),
        "comparisonValue": n => { win32LobAppPowerShellScriptRule.comparisonValue = n.getStringValue() as any ; },
        "displayName": n => { win32LobAppPowerShellScriptRule.displayName = n.getStringValue() as any ; },
        "enforceSignatureCheck": n => { win32LobAppPowerShellScriptRule.enforceSignatureCheck = n.getBooleanValue() as any ; },
        "operationType": n => { win32LobAppPowerShellScriptRule.operationType = n.getEnumValue<Win32LobAppPowerShellScriptRuleOperationType>(Win32LobAppPowerShellScriptRuleOperationType) as any ; },
        "operator": n => { win32LobAppPowerShellScriptRule.operator = n.getEnumValue<Win32LobAppRuleOperator>(Win32LobAppRuleOperator) as any ; },
        "runAs32Bit": n => { win32LobAppPowerShellScriptRule.runAs32Bit = n.getBooleanValue() as any ; },
        "runAsAccount": n => { win32LobAppPowerShellScriptRule.runAsAccount = n.getEnumValue<RunAsAccountType>(RunAsAccountType) as any ; },
        "scriptContent": n => { win32LobAppPowerShellScriptRule.scriptContent = n.getStringValue() as any ; },
    }
}
