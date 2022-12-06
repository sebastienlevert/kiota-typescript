import {EducationResource} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationExternalResource extends EducationResource, Partial<Parsable> {
    /** Location of the resource. Required */
    webUrl?: string;
}
