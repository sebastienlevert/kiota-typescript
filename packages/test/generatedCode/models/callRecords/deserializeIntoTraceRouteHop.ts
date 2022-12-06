import {TraceRouteHop} from './index';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTraceRouteHop(traceRouteHop: TraceRouteHop | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "hopCount": n => { traceRouteHop.hopCount = n.getNumberValue() as any ; },
        "ipAddress": n => { traceRouteHop.ipAddress = n.getStringValue() as any ; },
        "@odata.type": n => { traceRouteHop.odataType = n.getStringValue() as any ; },
        "roundTripTime": n => { traceRouteHop.roundTripTime = n.getDurationValue() as any ; },
    }
}
