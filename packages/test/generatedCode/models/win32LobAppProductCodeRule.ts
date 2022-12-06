import {Win32LobAppRule} from './index';
import {Win32LobAppRuleOperator} from './win32LobAppRuleOperator';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Win32LobAppProductCodeRule extends Partial<Parsable>, Win32LobAppRule {
    /** The product code of the app. */
    productCode?: string;
    /** The product version comparison value. */
    productVersion?: string;
    /** Contains properties for detection operator. */
    productVersionOperator?: Win32LobAppRuleOperator;
}
