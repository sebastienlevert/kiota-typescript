import {serializeAccessPackage} from '../../../../../../models/serializeAccessPackage';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../../../models/serializeBaseCollectionPaginationCountResponse';
import {FilterByCurrentUserWithOnResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFilterByCurrentUserWithOnResponse(writer: SerializationWriter, filterByCurrentUserWithOnResponse: FilterByCurrentUserWithOnResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, filterByCurrentUserWithOnResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", filterByCurrentUserWithOnResponse.value as any, serializeAccessPackage);
}
