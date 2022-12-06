import {Win32LobAppRule} from './index';
import {Win32LobAppRuleType} from './win32LobAppRuleType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWin32LobAppRule(writer: SerializationWriter, win32LobAppRule: Win32LobAppRule | undefined = {}) : void {
            writer.writeStringValue("@odata.type", win32LobAppRule.odataType);
            writer.writeEnumValue<Win32LobAppRuleType>("ruleType", win32LobAppRule.ruleType);
}
