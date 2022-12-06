import {OutlookCategoryCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeOutlookCategory} from './serializeOutlookCategory';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOutlookCategoryCollectionResponse(writer: SerializationWriter, outlookCategoryCollectionResponse: OutlookCategoryCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, outlookCategoryCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", outlookCategoryCollectionResponse.value as any, serializeOutlookCategory);
}
