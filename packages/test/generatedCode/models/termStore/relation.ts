import {Entity} from '../';
import {Set, Term} from './index';
import {RelationType} from './relationType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Relation extends Entity, Partial<Parsable> {
    /** The fromTerm property */
    fromTerm?: Term;
    /** The relationship property */
    relationship?: RelationType;
    /** The set property */
    set?: Set;
    /** The toTerm property */
    toTerm?: Term;
}
