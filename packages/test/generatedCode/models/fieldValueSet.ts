import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface FieldValueSet extends Entity, Partial<Parsable> {
}
