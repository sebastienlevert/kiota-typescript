import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ColumnLink extends Entity, Partial<Parsable> {
    /** The name of the column  in this content type. */
    name?: string;
}
