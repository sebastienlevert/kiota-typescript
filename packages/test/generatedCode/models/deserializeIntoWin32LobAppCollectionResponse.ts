import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWin32LobApp} from './deserializeIntoWin32LobApp';
import {Win32LobAppCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWin32LobAppCollectionResponse(win32LobAppCollectionResponse: Win32LobAppCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(win32LobAppCollectionResponse),
        "value": n => { win32LobAppCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWin32LobApp) as any ; },
    }
}
