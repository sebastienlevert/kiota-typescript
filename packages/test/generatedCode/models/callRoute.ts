import {IdentitySet} from './index';
import {RoutingType} from './routingType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CallRoute extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The final property */
    final?: IdentitySet;
    /** The OdataType property */
    odataType?: string;
    /** The original property */
    original?: IdentitySet;
    /** The routingType property */
    routingType?: RoutingType;
}
