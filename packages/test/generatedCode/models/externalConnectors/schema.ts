import {Entity} from '../';
import {Property} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Schema extends Entity, Partial<Parsable> {
    /** Must be set to microsoft.graph.externalConnector.externalItem. Required. */
    baseType?: string;
    /** The properties defined for the items in the connection. The minimum number of properties is one, the maximum is 128. */
    properties?: Property[];
}
