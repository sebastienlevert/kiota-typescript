import {serializeBaseCollectionPaginationCountResponse} from '../../../../../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeContentType} from '../../../../../../../../models/serializeContentType';
import {GetCompatibleHubContentTypesResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetCompatibleHubContentTypesResponse(writer: SerializationWriter, getCompatibleHubContentTypesResponse: GetCompatibleHubContentTypesResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getCompatibleHubContentTypesResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", getCompatibleHubContentTypesResponse.value as any, serializeContentType);
}
