import {Win32LobAppCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWin32LobApp} from './serializeWin32LobApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWin32LobAppCollectionResponse(writer: SerializationWriter, win32LobAppCollectionResponse: Win32LobAppCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, win32LobAppCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", win32LobAppCollectionResponse.value as any, serializeWin32LobApp);
}
