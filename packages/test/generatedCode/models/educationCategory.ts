import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationCategory extends Entity, Partial<Parsable> {
    /** Unique identifier for the category. */
    displayName?: string;
}
