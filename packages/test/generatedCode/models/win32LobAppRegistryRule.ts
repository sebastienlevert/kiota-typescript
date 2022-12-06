import {Win32LobAppRule} from './index';
import {Win32LobAppRegistryRuleOperationType} from './win32LobAppRegistryRuleOperationType';
import {Win32LobAppRuleOperator} from './win32LobAppRuleOperator';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Win32LobAppRegistryRule extends Partial<Parsable>, Win32LobAppRule {
    /** A value indicating whether to search the 32-bit registry on 64-bit systems. */
    check32BitOn64System?: boolean;
    /** The registry comparison value. */
    comparisonValue?: string;
    /** The full path of the registry entry containing the value to detect. */
    keyPath?: string;
    /** Contains all supported registry data detection type. */
    operationType?: Win32LobAppRegistryRuleOperationType;
    /** Contains properties for detection operator. */
    operator?: Win32LobAppRuleOperator;
    /** The name of the registry value to detect. */
    valueName?: string;
}
