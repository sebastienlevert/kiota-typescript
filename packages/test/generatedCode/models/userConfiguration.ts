import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserConfiguration extends Entity, Partial<Parsable> {
    /** The binaryData property */
    binaryData?: string;
}
