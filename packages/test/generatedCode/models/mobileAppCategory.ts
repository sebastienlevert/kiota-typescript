import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MobileAppCategory extends Entity, Partial<Parsable> {
    /** The name of the app category. */
    displayName?: string;
    /** The date and time the mobileAppCategory was last modified. */
    lastModifiedDateTime?: Date;
}
