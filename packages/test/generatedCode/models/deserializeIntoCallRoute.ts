import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {CallRoute} from './index';
import {RoutingType} from './routingType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCallRoute(callRoute: CallRoute | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "final": n => { callRoute.final = n.getObject(deserializeIntoIdentitySet) as any ; },
        "@odata.type": n => { callRoute.odataType = n.getStringValue() as any ; },
        "original": n => { callRoute.original = n.getObject(deserializeIntoIdentitySet) as any ; },
        "routingType": n => { callRoute.routingType = n.getEnumValue<RoutingType>(RoutingType) as any ; },
    }
}
