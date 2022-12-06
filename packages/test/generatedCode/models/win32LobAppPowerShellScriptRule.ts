import {Win32LobAppRule} from './index';
import {RunAsAccountType} from './runAsAccountType';
import {Win32LobAppPowerShellScriptRuleOperationType} from './win32LobAppPowerShellScriptRuleOperationType';
import {Win32LobAppRuleOperator} from './win32LobAppRuleOperator';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Win32LobAppPowerShellScriptRule extends Partial<Parsable>, Win32LobAppRule {
    /** The script output comparison value. Do not specify a value if the rule is used for detection. */
    comparisonValue?: string;
    /** The display name for the rule. Do not specify this value if the rule is used for detection. */
    displayName?: string;
    /** A value indicating whether a signature check is enforced. */
    enforceSignatureCheck?: boolean;
    /** Contains all supported Powershell Script output detection type. */
    operationType?: Win32LobAppPowerShellScriptRuleOperationType;
    /** Contains properties for detection operator. */
    operator?: Win32LobAppRuleOperator;
    /** A value indicating whether the script should run as 32-bit. */
    runAs32Bit?: boolean;
    /** The execution context of the script. Do not specify this value if the rule is used for detection. Script detection rules will run in the same context as the associated app install context. Possible values are: system, user. */
    runAsAccount?: RunAsAccountType;
    /** The base64-encoded script content. */
    scriptContent?: string;
}
