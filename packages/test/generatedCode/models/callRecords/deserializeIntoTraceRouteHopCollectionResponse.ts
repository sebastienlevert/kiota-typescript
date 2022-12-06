import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoTraceRouteHop} from './deserializeIntoTraceRouteHop';
import {TraceRouteHopCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTraceRouteHopCollectionResponse(traceRouteHopCollectionResponse: TraceRouteHopCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(traceRouteHopCollectionResponse),
        "value": n => { traceRouteHopCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTraceRouteHop) as any ; },
    }
}
