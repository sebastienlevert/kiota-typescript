import {Win32LobAppRuleCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWin32LobAppRule} from './serializeWin32LobAppRule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWin32LobAppRuleCollectionResponse(writer: SerializationWriter, win32LobAppRuleCollectionResponse: Win32LobAppRuleCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, win32LobAppRuleCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", win32LobAppRuleCollectionResponse.value as any, serializeWin32LobAppRule);
}
