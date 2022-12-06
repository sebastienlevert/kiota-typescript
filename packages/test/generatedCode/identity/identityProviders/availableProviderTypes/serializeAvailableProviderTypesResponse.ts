import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {AvailableProviderTypesResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAvailableProviderTypesResponse(writer: SerializationWriter, availableProviderTypesResponse: AvailableProviderTypesResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, availableProviderTypesResponse)
            writer.writeCollectionOfPrimitiveValues<string>("value", availableProviderTypesResponse.value);
}
