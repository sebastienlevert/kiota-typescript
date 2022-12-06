import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {TraceRouteHopCollectionResponse} from './index';
import {serializeTraceRouteHop} from './serializeTraceRouteHop';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTraceRouteHopCollectionResponse(writer: SerializationWriter, traceRouteHopCollectionResponse: TraceRouteHopCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, traceRouteHopCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", traceRouteHopCollectionResponse.value as any, serializeTraceRouteHop);
}
