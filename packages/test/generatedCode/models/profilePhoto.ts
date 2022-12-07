import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ProfilePhoto extends Entity, Partial<Parsable> {
    /** The height of the photo. Read-only. */
    height?: number;
    /** The width of the photo. Read-only. */
    width?: number;
}
