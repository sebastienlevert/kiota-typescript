import {Win32LobAppReturnCode} from './index';
import {Win32LobAppReturnCodeType} from './win32LobAppReturnCodeType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWin32LobAppReturnCode(writer: SerializationWriter, win32LobAppReturnCode: Win32LobAppReturnCode | undefined = {}) : void {
            writer.writeStringValue("@odata.type", win32LobAppReturnCode.odataType);
            writer.writeNumberValue("returnCode", win32LobAppReturnCode.returnCode);
            writer.writeEnumValue<Win32LobAppReturnCodeType>("type", win32LobAppReturnCode.type);
}
