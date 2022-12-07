import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ContactMergeSuggestions extends Entity, Partial<Parsable> {
    /** true if the duplicate contact merge suggestions feature is enabled for the user; false if the feature is disabled. Default value is true. */
    isEnabled?: boolean;
}
