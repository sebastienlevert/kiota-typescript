import {Entity} from './index';
import {RoutingMode} from './routingMode';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AudioRoutingGroup extends Entity, Partial<Parsable> {
    /** The receivers property */
    receivers?: string[];
    /** The routingMode property */
    routingMode?: RoutingMode;
    /** The sources property */
    sources?: string[];
}
