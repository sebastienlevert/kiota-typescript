import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeUserActivity} from '../../../models/serializeUserActivity';
import {RecentResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRecentResponse(writer: SerializationWriter, recentResponse: RecentResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, recentResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", recentResponse.value as any, serializeUserActivity);
}
