import {Entity} from '../';
import {Set} from './index';
import {TermGroupScope} from './termGroupScope';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Group extends Entity, Partial<Parsable> {
    /** Date and time of the group creation. Read-only. */
    createdDateTime?: Date;
    /** Description that gives details on the term usage. */
    description?: string;
    /** Name of the group. */
    displayName?: string;
    /** ID of the parent site of this group. */
    parentSiteId?: string;
    /** The scope property */
    scope?: TermGroupScope;
    /** All sets under the group in a term [store]. */
    sets?: Set[];
}
