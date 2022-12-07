import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MultiValueLegacyExtendedProperty extends Entity, Partial<Parsable> {
    /** A collection of property values. */
    value?: string[];
}