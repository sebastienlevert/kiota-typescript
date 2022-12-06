import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDomainDnsTxtRecord} from './deserializeIntoDomainDnsTxtRecord';
import {DomainDnsTxtRecordCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDomainDnsTxtRecordCollectionResponse(domainDnsTxtRecordCollectionResponse: DomainDnsTxtRecordCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(domainDnsTxtRecordCollectionResponse),
        "value": n => { domainDnsTxtRecordCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDomainDnsTxtRecord) as any ; },
    }
}
