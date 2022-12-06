import {CallRoute} from './index';
import {RoutingType} from './routingType';
import {serializeIdentitySet} from './serializeIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCallRoute(writer: SerializationWriter, callRoute: CallRoute | undefined = {}) : void {
            writer.writeObjectValueFromMethod("final", callRoute.final as any, serializeIdentitySet);
            writer.writeStringValue("@odata.type", callRoute.odataType);
            writer.writeObjectValueFromMethod("original", callRoute.original as any, serializeIdentitySet);
            writer.writeEnumValue<RoutingType>("routingType", callRoute.routingType);
}
