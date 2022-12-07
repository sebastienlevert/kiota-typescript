import {Entity, KeyValue} from '../';
import {LocalizedDescription, LocalizedLabel, Relation, Set} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Term extends Entity, Partial<Parsable> {
    /** Children of current term. */
    children?: Term[];
    /** Date and time of term creation. Read-only. */
    createdDateTime?: Date;
    /** Description about term that is dependent on the languageTag. */
    descriptions?: LocalizedDescription[];
    /** Label metadata for a term. */
    labels?: LocalizedLabel[];
    /** Last date and time of term modification. Read-only. */
    lastModifiedDateTime?: Date;
    /** Collection of properties on the term. */
    properties?: KeyValue[];
    /** To indicate which terms are related to the current term as either pinned or reused. */
    relations?: Relation[];
    /** The set property */
    set?: Set;
}
