import {deserializeIntoWin32LobAppRule} from './deserializeIntoWin32LobAppRule';
import {Win32LobAppRegistryRule} from './index';
import {Win32LobAppRegistryRuleOperationType} from './win32LobAppRegistryRuleOperationType';
import {Win32LobAppRuleOperator} from './win32LobAppRuleOperator';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWin32LobAppRegistryRule(win32LobAppRegistryRule: Win32LobAppRegistryRule | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoWin32LobAppRule(win32LobAppRegistryRule),
        "check32BitOn64System": n => { win32LobAppRegistryRule.check32BitOn64System = n.getBooleanValue() as any ; },
        "comparisonValue": n => { win32LobAppRegistryRule.comparisonValue = n.getStringValue() as any ; },
        "keyPath": n => { win32LobAppRegistryRule.keyPath = n.getStringValue() as any ; },
        "operationType": n => { win32LobAppRegistryRule.operationType = n.getEnumValue<Win32LobAppRegistryRuleOperationType>(Win32LobAppRegistryRuleOperationType) as any ; },
        "operator": n => { win32LobAppRegistryRule.operator = n.getEnumValue<Win32LobAppRuleOperator>(Win32LobAppRuleOperator) as any ; },
        "valueName": n => { win32LobAppRegistryRule.valueName = n.getStringValue() as any ; },
    }
}
