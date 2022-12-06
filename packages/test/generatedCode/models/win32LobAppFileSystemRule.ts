import {Win32LobAppRule} from './index';
import {Win32LobAppFileSystemOperationType} from './win32LobAppFileSystemOperationType';
import {Win32LobAppRuleOperator} from './win32LobAppRuleOperator';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Win32LobAppFileSystemRule extends Partial<Parsable>, Win32LobAppRule {
    /** A value indicating whether to expand environment variables in the 32-bit context on 64-bit systems. */
    check32BitOn64System?: boolean;
    /** The file or folder comparison value. */
    comparisonValue?: string;
    /** The file or folder name to look up. */
    fileOrFolderName?: string;
    /** Contains all supported file system detection type. */
    operationType?: Win32LobAppFileSystemOperationType;
    /** Contains properties for detection operator. */
    operator?: Win32LobAppRuleOperator;
    /** The file or folder path to look up. */
    path?: string;
}
