import {TraceRouteHop} from './index';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTraceRouteHop(writer: SerializationWriter, traceRouteHop: TraceRouteHop | undefined = {}) : void {
            writer.writeNumberValue("hopCount", traceRouteHop.hopCount);
            writer.writeStringValue("ipAddress", traceRouteHop.ipAddress);
            writer.writeStringValue("@odata.type", traceRouteHop.odataType);
            writer.writeDurationValue("roundTripTime", traceRouteHop.roundTripTime);
}
