import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWin32LobAppRule} from './deserializeIntoWin32LobAppRule';
import {Win32LobAppRuleCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWin32LobAppRuleCollectionResponse(win32LobAppRuleCollectionResponse: Win32LobAppRuleCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(win32LobAppRuleCollectionResponse),
        "value": n => { win32LobAppRuleCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWin32LobAppRule) as any ; },
    }
}
