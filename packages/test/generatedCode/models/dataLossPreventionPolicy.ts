import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DataLossPreventionPolicy extends Entity, Partial<Parsable> {
    /** The name property */
    name?: string;
}
