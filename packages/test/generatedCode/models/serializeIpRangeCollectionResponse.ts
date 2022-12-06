import {IpRangeCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIpRange} from './serializeIpRange';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIpRangeCollectionResponse(writer: SerializationWriter, ipRangeCollectionResponse: IpRangeCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, ipRangeCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", ipRangeCollectionResponse.value as any, serializeIpRange);
}
