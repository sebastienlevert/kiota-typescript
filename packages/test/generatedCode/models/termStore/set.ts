import {Entity, KeyValue} from '../';
import {Group, LocalizedName, Relation, Term} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Set extends Entity, Partial<Parsable> {
    /** Children terms of set in term [store]. */
    children?: Term[];
    /** Date and time of set creation. Read-only. */
    createdDateTime?: Date;
    /** Description giving details on the term usage. */
    description?: string;
    /** Name of the set for each languageTag. */
    localizedNames?: LocalizedName[];
    /** The parentGroup property */
    parentGroup?: Group;
    /** Custom properties for the set. */
    properties?: KeyValue[];
    /** Indicates which terms have been pinned or reused directly under the set. */
    relations?: Relation[];
    /** All the terms under the set. */
    terms?: Term[];
}
