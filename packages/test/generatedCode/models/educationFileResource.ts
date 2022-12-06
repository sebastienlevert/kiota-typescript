import {EducationResource} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationFileResource extends EducationResource, Partial<Parsable> {
    /** Location on disk of the file resource. */
    fileUrl?: string;
}
