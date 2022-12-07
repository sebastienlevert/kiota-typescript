import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OnenoteEntityBaseModel extends Entity, Partial<Parsable> {
    /** The self property */
    self?: string;
}
