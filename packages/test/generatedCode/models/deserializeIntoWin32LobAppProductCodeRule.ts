import {deserializeIntoWin32LobAppRule} from './deserializeIntoWin32LobAppRule';
import {Win32LobAppProductCodeRule} from './index';
import {Win32LobAppRuleOperator} from './win32LobAppRuleOperator';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWin32LobAppProductCodeRule(win32LobAppProductCodeRule: Win32LobAppProductCodeRule | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoWin32LobAppRule(win32LobAppProductCodeRule),
        "productCode": n => { win32LobAppProductCodeRule.productCode = n.getStringValue() as any ; },
        "productVersion": n => { win32LobAppProductCodeRule.productVersion = n.getStringValue() as any ; },
        "productVersionOperator": n => { win32LobAppProductCodeRule.productVersionOperator = n.getEnumValue<Win32LobAppRuleOperator>(Win32LobAppRuleOperator) as any ; },
    }
}
