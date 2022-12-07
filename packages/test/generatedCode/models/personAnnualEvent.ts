import {ItemFacet} from './index';
import {PersonAnnualEventType} from './personAnnualEventType';
import {DateOnly, Parsable} from '@microsoft/kiota-abstractions';

export interface PersonAnnualEvent extends ItemFacet, Partial<Parsable> {
    /** The date property */
    date?: DateOnly;
    /** The displayName property */
    displayName?: string;
    /** The type property */
    type?: PersonAnnualEventType;
}
