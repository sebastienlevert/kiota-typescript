import {IntegerRangeCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIntegerRange} from './serializeIntegerRange';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIntegerRangeCollectionResponse(writer: SerializationWriter, integerRangeCollectionResponse: IntegerRangeCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, integerRangeCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", integerRangeCollectionResponse.value as any, serializeIntegerRange);
}
