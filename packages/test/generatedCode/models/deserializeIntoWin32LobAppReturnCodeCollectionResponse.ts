import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWin32LobAppReturnCode} from './deserializeIntoWin32LobAppReturnCode';
import {Win32LobAppReturnCodeCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWin32LobAppReturnCodeCollectionResponse(win32LobAppReturnCodeCollectionResponse: Win32LobAppReturnCodeCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(win32LobAppReturnCodeCollectionResponse),
        "value": n => { win32LobAppReturnCodeCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWin32LobAppReturnCode) as any ; },
    }
}
