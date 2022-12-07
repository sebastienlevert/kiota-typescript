import {EmailType} from './emailType';
import {ItemFacet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ItemEmail extends ItemFacet, Partial<Parsable> {
    /** The email address itself. */
    address?: string;
    /** The name or label a user has associated with a particular email address. */
    displayName?: string;
    /** The type property */
    type?: EmailType;
}
