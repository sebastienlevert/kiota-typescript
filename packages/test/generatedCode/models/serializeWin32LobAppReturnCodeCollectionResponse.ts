import {Win32LobAppReturnCodeCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWin32LobAppReturnCode} from './serializeWin32LobAppReturnCode';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWin32LobAppReturnCodeCollectionResponse(writer: SerializationWriter, win32LobAppReturnCodeCollectionResponse: Win32LobAppReturnCodeCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, win32LobAppReturnCodeCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", win32LobAppReturnCodeCollectionResponse.value as any, serializeWin32LobAppReturnCode);
}
