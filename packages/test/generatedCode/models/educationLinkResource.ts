import {EducationResource} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationLinkResource extends EducationResource, Partial<Parsable> {
    /** URL to the resource. */
    link?: string;
}
