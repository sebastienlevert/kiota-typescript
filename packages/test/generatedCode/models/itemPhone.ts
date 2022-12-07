import {ItemFacet} from './index';
import {PhoneType} from './phoneType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ItemPhone extends ItemFacet, Partial<Parsable> {
    /** Friendly name the user has assigned this phone number. */
    displayName?: string;
    /** Phone number provided by the user. */
    number?: string;
    /** The type property */
    type?: PhoneType;
}
