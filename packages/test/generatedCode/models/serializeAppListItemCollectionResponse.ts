import {AppListItemCollectionResponse} from './index';
import {serializeAppListItem} from './serializeAppListItem';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppListItemCollectionResponse(writer: SerializationWriter, appListItemCollectionResponse: AppListItemCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, appListItemCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", appListItemCollectionResponse.value as any, serializeAppListItem);
}
