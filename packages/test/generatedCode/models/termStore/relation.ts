import {Entity} from '../';
import {Set, Term} from './index';
import {RelationType} from './relationType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Relation extends Entity, Partial<Parsable> {
    /** The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set]. */
    fromTerm?: Term;
    /** The type of relation. Possible values are: pin, reuse. */
    relationship?: RelationType;
    /** The [set] in which the relation is relevant. */
    set?: Set;
    /** The to [term] of the relation. The term to which the relationship is defined. */
    toTerm?: Term;
}
