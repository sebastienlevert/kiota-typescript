import {OutlookCategoryCollectionResponse} from './index';
import {serializeOutlookCategory} from './serializeOutlookCategory';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOutlookCategoryCollectionResponse(writer: SerializationWriter, outlookCategoryCollectionResponse: OutlookCategoryCollectionResponse | undefined = {}) : void {
            writer.writeStringValue("@odata.nextLink", outlookCategoryCollectionResponse.odataNextLink);
            writer.writeCollectionOfObjectValuesFromMethod("value", outlookCategoryCollectionResponse.value as any, serializeOutlookCategory);
}
