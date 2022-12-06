import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeContentType} from '../../../models/serializeContentType';
import {GetApplicableContentTypesForListWithListIdResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetApplicableContentTypesForListWithListIdResponse(writer: SerializationWriter, getApplicableContentTypesForListWithListIdResponse: GetApplicableContentTypesForListWithListIdResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getApplicableContentTypesForListWithListIdResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", getApplicableContentTypesForListWithListIdResponse.value as any, serializeContentType);
}
