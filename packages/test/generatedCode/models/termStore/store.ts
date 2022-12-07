import {Entity} from '../';
import {Group, Set} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Store extends Entity, Partial<Parsable> {
    /** Default language of the term store. */
    defaultLanguageTag?: string;
    /** Collection of all groups available in the term store. */
    groups?: Group[];
    /** List of languages for the term store. */
    languageTags?: string[];
    /** Collection of all sets available in the term store. */
    sets?: Set[];
}
