import {Win32LobAppReturnCode} from './index';
import {Win32LobAppReturnCodeType} from './win32LobAppReturnCodeType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWin32LobAppReturnCode(win32LobAppReturnCode: Win32LobAppReturnCode | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { win32LobAppReturnCode.odataType = n.getStringValue() as any ; },
        "returnCode": n => { win32LobAppReturnCode.returnCode = n.getNumberValue() as any ; },
        "type": n => { win32LobAppReturnCode.type = n.getEnumValue<Win32LobAppReturnCodeType>(Win32LobAppReturnCodeType) as any ; },
    }
}
