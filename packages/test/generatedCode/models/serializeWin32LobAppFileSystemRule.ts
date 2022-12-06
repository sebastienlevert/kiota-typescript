import {Win32LobAppFileSystemRule} from './index';
import {serializeWin32LobAppRule} from './serializeWin32LobAppRule';
import {Win32LobAppFileSystemOperationType} from './win32LobAppFileSystemOperationType';
import {Win32LobAppRuleOperator} from './win32LobAppRuleOperator';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWin32LobAppFileSystemRule(writer: SerializationWriter, win32LobAppFileSystemRule: Win32LobAppFileSystemRule | undefined = {}) : void {
        serializeWin32LobAppRule(writer, win32LobAppFileSystemRule)
            writer.writeBooleanValue("check32BitOn64System", win32LobAppFileSystemRule.check32BitOn64System);
            writer.writeStringValue("comparisonValue", win32LobAppFileSystemRule.comparisonValue);
            writer.writeStringValue("fileOrFolderName", win32LobAppFileSystemRule.fileOrFolderName);
            writer.writeEnumValue<Win32LobAppFileSystemOperationType>("operationType", win32LobAppFileSystemRule.operationType);
            writer.writeEnumValue<Win32LobAppRuleOperator>("operator", win32LobAppFileSystemRule.operator);
            writer.writeStringValue("path", win32LobAppFileSystemRule.path);
}
